let scrollAmount=0;

function scrollProducts(direction) {
  const productList = document.getElementById('lista-produtos');
  const productWidth = productList.children[0].offsetWidth + 20;
  scrollAmount += direction * productWidth;
  productList.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}
