// افزودن محصول به پایگاه داده
export async function addProduct(product) {
  try {
    const res = await fetch('http://localhost/ReactApp3/backend/add_product.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// دریافت محصولات از پایگاه داده
export async function fetchProducts() {
  try {
    const res = await fetch('http://localhost/ReactApp3/backend/fetch_products.php');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// ثبت‌نام کاربر جدید
export async function registerUser(user) {
  try {
    const res = await fetch('http://localhost/ReactApp3/backend/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// ورود کاربر
export async function loginUser(user) {
  try {
    const res = await fetch('http://localhost/ReactApp3/backend/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}