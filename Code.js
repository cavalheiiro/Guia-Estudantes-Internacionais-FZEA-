function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Guia do Estudante FZEA-USP')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // Permite incorporar no Google Sites
}