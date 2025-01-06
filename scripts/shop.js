document.addEventListener("DOMContentLoaded", function () {
  const filterCheckboxes = document.querySelectorAll(".filter-checkbox");

  // Filter listener
  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });

  function applyFilters() {
    const products = document.querySelectorAll(".product");

    // If nothing is checked - Show all
    const isAllUnchecked = Array.from(filterCheckboxes).every(
      (checkbox) => !checkbox.checked
    );

    products.forEach((product) => {
      if (isAllUnchecked) {
        product.style.display = "block";
      } else {
        const productClass = product.classList;
        let isShow = false;

        filterCheckboxes.forEach((checkbox) => {
          if (checkbox.checked && productClass.contains(checkbox.value)) {
            isShow = true;
          }
        });

        product.style.display = isShow ? "block" : "none";
      }
    });
  }
});
