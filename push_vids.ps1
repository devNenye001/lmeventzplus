$videos = @(
  "public/video-4.mp4",
  "public/video-5.mp4",
  "public/video-6.mp4",
  "public/video-7.mp4",
  "public/video-8.mp4",
  "public/social5.mp4",
  "public/cop-vid1.mp4",
  "public/cop-vid2.mp4",
  "public/cop-vid3.mp4",
  "public/cop-vid4.mp4",
  "public/cop-vid5.mp4",
  "public/cop-vid6.mp4",
  "public/cop-vid7.mp4",
  "public/cop-vid8.mp4",
  "public/cop-vid9.mp4",
  "public/cop-vid10.mp4",
  "public/cop-vid11.mp4",
  "public/cop-vid12.mp4",
  "public/cop-vid13.mp4",
  "public/cop-vid14.mp4"
)

foreach ($vid in $videos) {
  if (Test-Path $vid) {
    Write-Output "--------------------------------------------------"
    Write-Output "Processing: $vid"
    
    git add $vid
    git commit -m "assets: add $vid"
    
    $success = $false
    $retryCount = 0
    $maxRetries = 5
    
    while (-not $success -and $retryCount -lt $maxRetries) {
      Write-Output "Pushing $vid (Attempt $($retryCount + 1) of $maxRetries)..."
      git push origin main
      
      if ($LASTEXITCODE -eq 0) {
        $success = $true
        Write-Output "Successfully pushed $vid!"
      } else {
        $retryCount++
        if ($retryCount -lt $maxRetries) {
          Write-Output "Push failed. Waiting 10 seconds before retry..."
          Start-Sleep -Seconds 10
        } else {
          Write-Error "Failed to push $vid after $maxRetries attempts."
        }
      }
    }
  } else {
    Write-Output "File not found: $vid"
  }
}
