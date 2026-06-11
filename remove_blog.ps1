$p = 'index.html'
$l = Get-Content $p -Encoding UTF8
$k = $l[0..579] + $l[803..($l.Length-1)]
Set-Content $p $k -Encoding UTF8
Write-Host "Done. Lines remaining: $($k.Length)"
