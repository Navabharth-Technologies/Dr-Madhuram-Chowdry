$content = [System.IO.File]::ReadAllText('about.html')
[System.IO.File]::WriteAllText('about.html', $content, [System.Text.Encoding]::UTF8)
