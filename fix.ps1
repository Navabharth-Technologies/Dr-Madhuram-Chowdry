$text = [System.IO.File]::ReadAllText('index.html', [System.Text.Encoding]::UTF8)
$text = $text.Replace([char]0xFFFD, "🔬")
[System.IO.File]::WriteAllText('index.html', $text, [System.Text.Encoding]::UTF8)
