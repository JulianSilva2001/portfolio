Neurocodec Supplementary Materials

Overview
This supplementary Folder provides qualitative comparisons between Neurocodec and existing models.
The main comparison page is supplementary_viewer.html, which is organized to show method-wise outputs for each sample in a consistent order.

Comparison Purpose
The supplementary viewer is designed to present proper comparisons with existing models, especially against M3ANet (existing SOTA baseline), and against an ablated Neurocodec variant (without Mel and GAN losses).

It shows 

1. Mixture
2. Target
3. M3ANet
4. Ours (Neurocodec)
5. Without Mel and GAN losses

How to Open the Supplementary Viewer?
Option 1: Open directly
- Double-click supplementary_viewer.html in File Explorer.

Option 2: Open from PowerShell
- Navigate to this folder and run:
  Start-Process .\supplementary_viewer.html


Datasets and Sampling Rates
1. Cocktail Party dataset
- Location: \Cocktail Party
- Purpose: Contains model outputs for the Cocktail Party dataset.
- Evaluation sampling rate: 44.1 kHz.

2. KUL dataset
- Location: \KUL
- Purpose: Contains model outputs for the KUL dataset.
- Evaluation sampling rate: 8 kHz.
- Note: KUL results are evaluated at 8 kHz because the original KUL data is provided at 8 kHz.

What Is Inside Each Folder
1. \Cocktail Party
- Samples\Sample_* subfolders.
- Each sample folder contains paired files for:
  - Mixture (input)
  - Target (ground truth)
  - M3ANet prediction
  - Neurocodec prediction (ours)
  - Ablated Neurocodec output (without Mel and GAN losses)
- For each method, both spectrogram image(s) and corresponding audio file(s) are provided.

2. \KUL
- Samples\Sample_* subfolders.
- Each sample folder contains mixture/target/prediction outputs and corresponding spectrogram plots.




