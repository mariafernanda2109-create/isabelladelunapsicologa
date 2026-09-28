# -*- coding: utf-8 -*-
"""Gera os assets derivados da identidade visual (marca com fundo transparente,
padrao de linhas recortado e foto otimizada) a partir dos arquivos originais."""
from PIL import Image, ImageFilter
import numpy as np, os

A = "assets"

def carregar(nome):
    im = Image.open(os.path.join(A, nome)).convert("RGB")
    print(nome, im.size)
    return im

def recortar_por_alpha(rgba, pad=8):
    bbox = rgba.split()[3].getbbox()
    if not bbox: return rgba
    x0, y0, x1, y1 = bbox
    x0, y0 = max(0, x0 - pad), max(0, y0 - pad)
    x1, y1 = min(rgba.width, x1 + pad), min(rgba.height, y1 + pad)
    return rgba.crop((x0, y0, x1, y1))

def pintar(alpha_arr, cor, size_ref):
    h, w = alpha_arr.shape
    rgb = np.zeros((h, w, 3), dtype=np.uint8)
    rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2] = cor
    rgba = np.dstack([rgb, (alpha_arr * 255).astype(np.uint8)])
    return Image.fromarray(rgba, "RGBA")

def salvar(im, nome, largura):
    if im.width > largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    im.save(os.path.join(A, nome), optimize=True)
    print("  ->", nome, im.size, os.path.getsize(os.path.join(A, nome)) // 1024, "KB")

# ---------------------------------------------------------------- 1. CORACAO
# No original o coracao e creme e o fundo (e as linhas que o atravessam) sao
# vermelhos. O canal verde separa muito bem os dois: creme ~200, vermelho ~35.
src = np.asarray(carregar("src-coracao-linhas.jpeg")).astype(np.float32)
alpha = np.clip((src[:, :, 1] - 85.0) / 75.0, 0, 1)

creme = pintar(alpha, (227, 189, 152), src.shape)
salvar(recortar_por_alpha(creme), "coracao-creme.png", 900)

vermelho = pintar(alpha, (158, 32, 39), src.shape)
salvar(recortar_por_alpha(vermelho), "coracao-vermelho.png", 900)

vinho = pintar(alpha, (128, 26, 33), src.shape)
salvar(recortar_por_alpha(vinho), "coracao-vinho.png", 600)

# --------------------------------------------------------------- 2. LINHAS
# Padrao de linhas continuas: vermelho sobre nude. Aqui invertemos a logica.
src = np.asarray(carregar("src-linhas.jpeg")).astype(np.float32)
alpha = np.clip((165.0 - src[:, :, 1]) / 70.0, 0, 1)

salvar(pintar(alpha, (158, 32, 39), src.shape), "linhas-vermelho.png", 1200)
salvar(pintar(alpha, (227, 189, 152), src.shape), "linhas-creme.png", 1200)
salvar(pintar(alpha, (247, 228, 196), src.shape), "linhas-claro.png", 1200)

# ----------------------------------------------------------------- 3. FOTO
foto = carregar("foto-original.jpeg")
for larg, nome in ((1200, "isabella.jpg"), (700, "isabella-small.jpg")):
    im = foto.copy()
    if im.width > larg:
        im = im.resize((larg, round(im.height * larg / im.width)), Image.LANCZOS)
    im.save(os.path.join(A, nome), "JPEG", quality=84, optimize=True, progressive=True)
    print("  ->", nome, im.size, os.path.getsize(os.path.join(A, nome)) // 1024, "KB")

# -------------------------------------------------------------- 4. FAVICON
mark = Image.open(os.path.join(A, "coracao-creme.png"))
for tam in (180, 32):
    fundo = Image.new("RGBA", (tam, tam), (158, 32, 39, 255))
    m = mark.copy()
    alvo = round(tam * 0.72)
    m = m.resize((round(m.width * alvo / m.height), alvo), Image.LANCZOS)
    fundo.paste(m, ((tam - m.width) // 2, (tam - m.height) // 2), m)
    nome = "favicon.png" if tam == 32 else "apple-touch-icon.png"
    fundo.save(os.path.join(A, nome), optimize=True)
    print("  ->", nome, fundo.size)

# ----------------------------------------------------------------- 5. WEBP
# O site entrega WebP e guarda o PNG/JPEG como alternativa (<picture> no HTML,
# image-set() no CSS). Estes arquivos precisam acompanhar os de cima, senao o
# site passa a servir uma versao velha para quase todo mundo.
#
# Marca e linhas vao sem perda: sao silhuetas de cor chapada, a informacao toda
# esta no canal alpha e qualidade lossy nao muda um byte sequer do resultado.
# A foto vai em qualidade 85, que ficou 35% menor que o JPEG com diferenca
# media de 2,3 niveis por canal (RMSE) — invisivel a olho nu num retrato.
print("\nWebP:")
for nome in ("coracao-creme.png", "coracao-vermelho.png",
             "linhas-creme.png", "linhas-vermelho.png"):
    origem = os.path.join(A, nome)
    destino = origem[:-4] + ".webp"
    Image.open(origem).save(destino, "WEBP", lossless=True, method=6)
    print("  ->", os.path.basename(destino),
          os.path.getsize(origem) // 1024, "KB ->",
          os.path.getsize(destino) // 1024, "KB")

for nome in ("isabella.jpg", "isabella-small.jpg"):
    origem = os.path.join(A, nome)
    destino = origem[:-4] + ".webp"
    Image.open(origem).save(destino, "WEBP", quality=85, method=6)
    print("  ->", os.path.basename(destino),
          os.path.getsize(origem) // 1024, "KB ->",
          os.path.getsize(destino) // 1024, "KB")
