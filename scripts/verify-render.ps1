$html = (Invoke-WebRequest -Uri 'http://localhost:3111/' -UseBasicParsing).Content

Write-Output "=== 1. LCP h1 (harus TANPA inline opacity:0) ==="
$h1 = [regex]::Match($html, '<h1[^>]*>.*?</h1>').Value
if ($h1 -match 'opacity:0') { Write-Output "FAIL: h1 masih di-gate opacity:0" } else { Write-Output "PASS: h1 bersih dari opacity gate" }
Write-Output $h1.Substring(0, [Math]::Min(400, $h1.Length))

Write-Output "`n=== 2. Elemen opacity-gated tersisa (sebelumnya banyak) ==="
$gated = ([regex]::Matches($html, 'style="opacity:0')).Count
Write-Output ("jumlah elemen dengan inline opacity:0 = " + $gated)

Write-Output "`n=== 3. Google Tag Manager ==="
$gtag = ([regex]::Matches($html, 'googletagmanager\.com')).Count
Write-Output ("jumlah referensi googletagmanager = " + $gtag)
if ($html -match '<link rel="preload" href="https://www\.googletagmanager\.com/gtag/js') { Write-Output "WARN: preload gtag masih ada" } else { Write-Output "PASS: tidak ada preload gtag manual" }

Write-Output "`n=== 4. Accessibility: aria-label ==="
$labels = [regex]::Matches($html, 'aria-label="([^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$labels | ForEach-Object { Write-Output ("  - " + $_) }

Write-Output "`n=== 5. Footer list semantics ==="
if ($html -match '<li role="button"') { Write-Output "FAIL: masih ada li role=button" } else { Write-Output "PASS: tidak ada li role=button" }
$liPlain = ([regex]::Matches($html, '<li>')).Count
Write-Output ("jumlah <li> plain = " + $liPlain)

Write-Output "`n=== 6. Heading hierarchy ==="
1..4 | ForEach-Object {
  $n = ([regex]::Matches($html, ('<h' + $_ + '[ >]'))).Count
  Write-Output ("  h" + $_ + " = " + $n)
}

Write-Output "`n=== 7. Skip link ==="
if ($html -match 'Lompat ke konten utama') { Write-Output "PASS: skip link ada" } else { Write-Output "FAIL: skip link hilang" }

Write-Output "`n=== 8. text-gray-500/600 di HTML (harus 0) ==="
$g5 = ([regex]::Matches($html, 'text-gray-500')).Count
$g6 = ([regex]::Matches($html, 'text-gray-600')).Count
Write-Output ("  gray-500 = " + $g5 + " | gray-600 = " + $g6)

Write-Output "`n=== 9. Font preload ==="
$fontPreload = ([regex]::Matches($html, 'rel="preload"[^>]*as="font"')).Count
Write-Output ("  jumlah font preload = " + $fontPreload + " (target 1)")
