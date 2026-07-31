$components = @(
  @{ Path = "Backgrounds/Threads/Threads.tsx"; OutPath = "backgrounds/Threads/Threads.tsx"; IsAnimation = $true },
  @{ Path = "Backgrounds/Hyperspeed/Hyperspeed.tsx"; OutPath = "backgrounds/Hyperspeed/Hyperspeed.tsx"; IsAnimation = $true },
  @{ Path = "Backgrounds/Particles/Particles.tsx"; OutPath = "backgrounds/Particles/Particles.tsx"; IsAnimation = $true },
  @{ Path = "Backgrounds/Balatro/Balatro.tsx"; OutPath = "backgrounds/Balatro/Balatro.tsx"; IsAnimation = $true },
  @{ Path = "Backgrounds/Aurora/Aurora.tsx"; OutPath = "backgrounds/Aurora/Aurora.tsx"; IsAnimation = $true },
  @{ Path = "SplashCursor/SplashCursor.jsx"; OutPath = "components/SplashCursor/SplashCursor.tsx"; IsAnimation = $false },
  @{ Path = "SplashCursor/SplashCursor.css"; OutPath = "components/SplashCursor/SplashCursor.css"; IsAnimation = $false },
  @{ Path = "BlobCursor/BlobCursor.jsx"; OutPath = "components/BlobCursor/BlobCursor.tsx"; IsAnimation = $false },
  @{ Path = "BlobCursor/BlobCursor.css"; OutPath = "components/BlobCursor/BlobCursor.css"; IsAnimation = $false }
)

Write-Host "Starting download of React Bits components and CSS from raw GitHub..."

foreach ($c in $components) {
  if ($c.IsAnimation) {
    $url = "https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-tailwind/$($c.Path)"
  } else {
    $url = "https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Animations/$($c.Path)"
  }
  
  $targetPath = Join-Path $PSScriptRoot "..\src\components\ui\$($c.OutPath)"
  $dir = Split-Path $targetPath -Parent
  
  Write-Host "Downloading $url -> $targetPath"
  try {
    # Create directory if it doesn't exist
    if (!(Test-Path $dir)) {
      New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    # Fetch content
    $content = Invoke-RestMethod -Uri $url
    
    # If it is a cursor JSX component, prepend // @ts-nocheck
    if (!$c.IsAnimation -and $c.Path.EndsWith(".jsx")) {
      $content = "// @ts-nocheck`n" + $content
    }
    
    # Save content
    Set-Content -Path $targetPath -Value $content -Encoding utf8 -Force
    Write-Host "Saved successfully!"
  } catch {
    Write-Error "Failed to download $($c.Path): $($_.Exception.Message)"
  }
}

Write-Host "All downloads completed!"
