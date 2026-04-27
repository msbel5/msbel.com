# Deploy guide — msbel.com

İlk yayına alma adımları, baştan sona. Toplam ~15 dakika.

---

## 0. Önkoşullar

- **Node 18+** (sende v24.12 var ✓)
- **Git** + GitHub hesabı (`msbel5`) ✓
- **Cloudflare hesabı** (msbel.com zaten orada) ✓
- (İsteğe bağlı) **GitHub CLI** `gh` — repo'yu komut satırından oluşturmak için

---

## 1. Bağımlılıkları yükle ve build doğrula

```bash
cd C:/Users/msbel/projects/msbel.com

# Astro + integrations'ı kur
npm install

# Local dev — http://localhost:4321
npm run dev

# Production build — dist/ üretir
npm run build
```

`npm run build` çıktısının sonuna `Complete!` yazıyorsa hazırsın.
Eğer hata alırsan README'deki yapıya bak — büyük ihtimalle bir dosya
yolu eksik.

---

## 2. GitHub repo'sunu oluştur

### Yol A: GitHub CLI ile (1 satır)

```bash
gh repo create msbel5/msbel.com --public \
  --description "Personal site of Muhammet Sıddık Bel" \
  --source=. \
  --push
```

Bu komut: dizini git init etmediyse eder, ilk commit'i atar, GitHub'da
repo açar, remote bağlar, push'lar — hepsi tek seferde.

### Yol B: Manuel (CLI yoksa)

```bash
git init
git add .
git commit -m "feat: initial portfolio site"
git branch -M main
```

Sonra **github.com/new** → "msbel.com" adıyla public repo aç → README,
.gitignore, license **eklemeden** "Create".

GitHub'ın gösterdiği komutları kopyala:

```bash
git remote add origin git@github.com:msbel5/msbel.com.git
git push -u origin main
```

---

## 3. Cloudflare Pages projesi oluştur

1. **dash.cloudflare.com** → giriş yap
2. Sol menü → **Workers & Pages**
3. **Create application** → **Pages** sekmesi → **Connect to Git**
4. **GitHub** seç → "Authorize Cloudflare Pages" tıkla (ilk seferse)
5. Repo listesinden **`msbel5/msbel.com`** seç → **Begin setup**
6. Build ayarları:

   | Field                  | Value                |
   | ---------------------- | -------------------- |
   | Project name           | `msbel-com`          |
   | Production branch      | `main`               |
   | Framework preset       | **Astro**            |
   | Build command          | `npm run build`      |
   | Build output directory | `dist`               |
   | Root directory         | _(empty)_            |
   | Node version           | `20` (env var: `NODE_VERSION=20`) |

7. **Save and Deploy**

İlk deploy ~2 dakika sürer. Bittiğinde sana
`msbel-com.pages.dev` URL'i verecek — bu yedek/staging URL'in.

---

## 4. Custom domain bağla → msbel.com

Cloudflare Pages otomatik olarak **aynı Cloudflare hesabındaki** domain'leri tanır.

1. Pages projesi sayfasında → **Custom domains** sekmesi
2. **Set up a custom domain**
3. **`msbel.com`** yaz → Continue → "Activate domain"
4. Cloudflare DNS'i otomatik günceller (zaten kendi hesabında olduğu için)
5. Aynı işlemi **`www.msbel.com`** için de yap (otomatik 301 redirect)

5 dakika sonra **`https://msbel.com`** canlı.

---

## 5. (İleride) Subdomain'leri eklemek

`trading.msbel.com`, `qa.msbel.com` vb. her biri **kendi Pages projesi** olabilir
ya da **Cloudflare Tunnel** ile Pi 5'ine bağlanabilir.

### Wildcard CNAME — bir kerelik kurulum

Cloudflare DNS → msbel.com → DNS records → Add record:

```
Type: CNAME
Name: *
Target: msbel.com
Proxy status: Proxied (turuncu bulut)
TTL: Auto
```

Bu satırdan sonra `<her şey>.msbel.com` çalışır — sadece o subdomain
için bir Pages projesi (custom domain alanına `xyz.msbel.com` yaz)
ya da Tunnel route'u ekle.

### Trading dashboard (Pi'den) — örnek

Pi'de:

```bash
# Cloudflare Tunnel kur (bir kerelik)
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64 -o cloudflared
chmod +x cloudflared && sudo mv cloudflared /usr/local/bin/

# Login (browser açılır)
cloudflared tunnel login

# Tunnel oluştur
cloudflared tunnel create msbel-pi
cloudflared tunnel route dns msbel-pi trading.msbel.com

# Config: ~/.cloudflared/config.yml
cat > ~/.cloudflared/config.yml << 'EOF'
tunnel: msbel-pi
credentials-file: /home/msbel/.cloudflared/<UUID>.json
ingress:
  - hostname: trading.msbel.com
    service: http://localhost:8085
  - service: http_status:404
EOF

# Çalıştır (systemd ile arkaplanda)
sudo cloudflared service install
```

Artık `trading.msbel.com` → Pi'deki port 8085 (dashboard).

---

## 6. Sonraki adımlar — yazma akışı

İlk post yayında. Yenisi için:

```bash
# Yeni post
$file = "src/content/writing/2026-05-XX-baslik.md"

# Markdown yaz, push:
git add .
git commit -m "post: yeni başlık"
git push
```

30 saniye sonra `msbel.com/writing/` listesinde görünür.

---

## 7. Olası sorunlar & çözümler

| Sorun | Çözüm |
| ----- | ----- |
| `npm install` hata veriyor | Node 18+ olduğunu doğrula: `node --version` |
| Build hatası: "Cannot find module 'astro'" | `node_modules` siliniyor: `rm -rf node_modules && npm install` |
| Cloudflare Pages preview deploy hatası | Build log'una bak — genelde Node version eksik. `NODE_VERSION=20` env var ekle |
| msbel.com hala eski sayfayı gösteriyor | Cloudflare Cache Purge: Pages projesi → "Purge cache" tıkla |
| Custom domain "active" değil | DNS'in propagate olması ~5 dakika; sabret |

---

## 8. Neye dokundun, neye dokunmadın?

**Dokundun:**
- GitHub'da bir public repo oluşturdun
- Cloudflare Pages'te tek bir project ekledin
- DNS'te (otomatik) bir CNAME oluştu

**Dokunmadın:**
- Sunucu yok, Pi'ye yük yok
- Bandwidth ücreti yok (Cloudflare unlimited)
- Build saniye limiti yok (Cloudflare 500/ay free, sen ayda <50 yapacaksın)
- Vercel/Netlify lock-in yok — istediğin gün başka yere taşırsın

**Maliyet:** $0/ay (sınırsız ölçek dahil).
