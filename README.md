# 🏆 Slugify-Plus - The Ultimate Slug Generator for Node.js 🚀

![npm](https://img.shields.io/npm/v/slugify-plus?color=blue&label=Slugify-Plus)
![contributors](https://img.shields.io/github/contributors/imankii01/slugify-plus)

**Slugify-Plus** is an advanced, customizable, and developer-friendly slug generator for Node.js and JavaScript applications.  
It helps create **SEO-friendly URLs, unique identifiers, database keys, and human-readable slugs** for various use cases.  

🔥 **Key Features**  
- 🌍 Supports multiple languages (transliteration for non-Latin characters).  
- 🔠 Converts text into **URL-safe slugs**.  
- 🎨 Customizable separators (`-`, `_`, `|`, `.`).  
- 🚀 Removes common **stop words** for better readability.  
- 🔢 Supports **max-length truncation** to fit database constraints.  
- 🔄 Auto-appends **unique IDs** if a duplicate exists.  
- 🔑 **CLI Support** for command-line usage.  

---

## 🎯 **Why Use Slugify-Plus Over Other Slug Generators?**

| Feature                | Slugify-Plus ✅ | Other Libraries ❌ |
|------------------------|----------------|--------------------|
| **Multi-language Support** | ✅ Yes | ❌ Limited |
| **Custom Separators** | ✅ Yes | ❌ No |
| **Stop Word Removal** | ✅ Yes | ❌ No |
| **Database Friendly** | ✅ Yes | ❌ No |
| **Unique ID Handling** | ✅ Yes | ❌ No |
| **CLI Support** | ✅ Yes | ❌ No |
| **TypeScript Support** | ✅ Yes | ❌ No |

---

## 📦 **Installation**  
Install the package via npm or yarn:

```sh
# Using npm
npm install slugify-plus

# Using yarn
yarn add slugify-plus
```

---

## 🚀 **Usage Guide**

### **1️⃣ Basic Slug Generation**
```js
const { slugify } = require("slugify-plus");

console.log(slugify("Hello World!")); 
// Output: hello-world
```

### **2️⃣ Custom Separator**
```js
console.log(slugify("Hello World!", { separator: "_" })); 
// Output: hello_world
```

### **3️⃣ Stop Word Removal**
```js
console.log(slugify("The Quick Brown Fox", { removeStopWords: true })); 
// Output: quick-brown-fox
```

### **4️⃣ Limit Slug Length**
```js
console.log(slugify("This is a very long title", { maxLength: 10 })); 
// Output: this-is-a
```

### **5️⃣ CLI Support**
```sh
npx slugify-plus "Hello World!"
# Output: hello-world
```

---

## 🌍 **Open Source Contribution**

Slugify-Plus is **open source** and welcomes contributions from developers worldwide. 💜  

### 🛠 **How to Contribute?**
1. **Fork the Repository** on GitHub.  
2. **Clone the Repository**  
   ```sh
   git clone https://github.com/imankii01/slugify-plus.git
   cd slugify-plus
   ```
3. **Install Dependencies**  
   ```sh
   npm install
   ```
4. **Create a New Branch**  
   ```sh
   git checkout -b feature-new-slug-format
   ```
5. **Make Your Changes & Commit**  
   ```sh
   git commit -m "Added new slug format feature"
   ```
6. **Push Changes & Create a Pull Request**  
   ```sh
   git push origin feature-new-slug-format
   ```
7. **Submit a PR on GitHub** 🚀  

---

## 💡 **Use Cases**
- 📌 **SEO Optimization** - Generate SEO-friendly URLs automatically.  
- 🔑 **Database & File Naming** - Avoid spaces in filenames & database keys.  
- 🌐 **CMS & Blogging Platforms** - Convert titles into clean slugs.  
- 📂 **Short URLs & Usernames** - Generate readable & shareable links.  

---

## 🎉 **Support the Project**
If you find this package useful, consider supporting me:  

☕ **[Buy Me a Coffee](https://www.buymeacoffee.com/imankii01)**  
⭐ **[Star this project on GitHub](https://github.com/imankii01/slugify-plus)**  

---

## 📄 **License**
This project is licensed under the **MIT License**.  
