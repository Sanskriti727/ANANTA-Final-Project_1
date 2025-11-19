import React, { useState } from "react";

// --- SAFE ICONS (Used to prevent module loading errors) ---
const TrashIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
const ShoppingBagIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // --- THE EXTENDED DATABASE (WITH YOUR IMAGES PRESERVED) ---
  const products = [
    {
      id: 1,
      name: "Biodegradable Earth Urn",
      price: 2500,
      rating: 4.8,
      category: "Eco-Friendly",
      images: [
        "https://fkur.com/wp-content/uploads/fkur-urnen-biokunststoff-scaled.jpg",
        "https://titancasket.com/cdn/shop/products/EcoWaterUrn2.webp?v=1670524145&width=533",
        "https://www.memorials.com/product_photos/barefoot-biodegradable-urn_1665603227.jpg",
      ],
      desc: "Handcrafted from recycled paper and natural binding agents. This urn is designed to dissolve within 4 hours when placed in water.",
      reviews: [
        {
          user: "Ravi K.",
          stars: "★★★★★",
          text: "Very peaceful and beautiful way to say goodbye.",
        },
        {
          user: "Anita S.",
          stars: "★★★★☆",
          text: "Smaller than expected but very high quality.",
        },
      ],
      boughtTogether: [5, 7],
    },
    {
      id: 2,
      name: "Eternal Memory Diamond",
      price: 45000,
      rating: 5.0,
      category: "Keepsake",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihbNpMTC_NDUbIdcd3vQBhB1BYuMd5JULqw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41JqcPYjzMwk7VzrbzQqfiHMiWy9WMjTJ9w&s",
        "https://images.squarespace-cdn.com/content/v1/607f9fb82040ca1eaced0e50/1aad7783-5969-444d-a6ef-d302a82ade1f/ED_JewelryPricesBanner.jpg",
      ],
      desc: "Turn a part of your loved one into a certified eternal diamond. We use carbon isolation technology to create a genuine lab-grown diamond.",
      reviews: [
        {
          user: "Mrs. D'Souza",
          stars: "★★★★★",
          text: "I wear him on my finger every day. Thank you.",
        },
      ],
      boughtTogether: [4],
    },
    {
      id: 3,
      name: "Guided Grief Journal",
      price: 850,
      rating: 4.9,
      category: "Wellness",
      images: [
        "https://images.squarespace-cdn.com/content/v1/575f3711f8508209d8ff7fdf/1711573565203-AVYD8PS3Z4BG8RTSXBW1/forget-me-not-guided-grief-journal.jpg?format=1000w",
        "https://immeryours.com.au/cdn/shop/files/Grief-A-Guided-Journal-2.jpg?v=1740391151&width=600",
        "https://images-cdn.ubuy.co.in/642f63998c2bce73cf6fb1e3-even-in-darkness-a-guided-grief-journal.jpg",
      ],
      desc: "A 90-day guided journal with prompts to help you process emotions, recall happy memories, and find peace.",
      reviews: [
        {
          user: "Karan M.",
          stars: "★★★★★",
          text: "Helped me more than therapy.",
        },
        {
          user: "Sneha P.",
          stars: "★★★★★",
          text: "The prompts are very gentle.",
        },
      ],
      boughtTogether: [7, 5],
    },
    {
      id: 5,
      name: "Brass Diya Set (Pack of 5)",
      price: 1200,
      rating: 4.7,
      category: "Ritual",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGP8f5EVLrF1VUeY2dj82jdsTjuC8tWYuSg&s",
        "https://decortwist.com/cdn/shop/products/993fc80f-3915-4e28-91c5-bb65af504120.png?v=1655130759&width=416",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufz2-lUJiNFVDsimw8N2OFPQar5fcnp-dJ_ee8DzSxxGg1RzMq4Jv5mzVH5Y8DYLob-o&usqp=CAU",
      ],
      desc: "Heavy pure brass diyas. Perfect for daily lighting or special Tithi ceremonies.",
      reviews: [],
      boughtTogether: [7, 1],
    },
    {
      id: 7,
      name: "Sandalwood Incense Box",
      price: 450,
      rating: 5.0,
      category: "Ritual",
      images: [
        "https://www.agarbattishop.com/wp-content/uploads/2023/08/FG-Naturals-Sandalwood-Incense-Sticks-2.jpg",
        "https://www.agarbattishop.com/wp-content/uploads/2024/07/JJFI0519-copy-FG-BAMBOOLESS-SANDALWOOD-PIC-2.jpg",
        "https://m.media-amazon.com/images/I/81iJnFRD+ML.jpg",
      ],
      desc: "Premium Mysore Sandalwood. 50 sticks per box. The scent is calming and aids in meditation and prayer.",
      reviews: [],
      boughtTogether: [3, 5],
    },
  ];

  const getRelatedItems = (ids) => {
    return products.filter((p) => ids.includes(p.id));
  };

  if (selectedProduct) {
    const related = getRelatedItems(selectedProduct.boughtTogether);

    return (
      <section className="min-h-screen bg-white py-8 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => {
              setSelectedProduct(null);
              setActiveImage(0);
            }}
            className="mb-8 flex items-center gap-2 text-[#0F4C48] font-bold hover:text-[#D81B60] transition"
          >
            ← Back to Market
          </button>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: Images */}
            <div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#D4A756]/30 mb-4 shadow-lg shadow-diya">
                <img
                  src={selectedProduct.images[activeImage]}
                  alt="Main"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      activeImage === idx
                        ? "border-[#D81B60] ring-2 ring-[#D81B60]/30"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumb"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Info */}
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[#D81B60] font-bold text-sm uppercase tracking-widest">
                    {selectedProduct.category}
                  </span>
                  <h1 className="text-4xl font-bold font-cinzel text-[#0F4C48] mt-2 mb-2">
                    {selectedProduct.name}
                  </h1>
                  <div className="flex items-center gap-2 text-[#D4A756] mb-6">
                    <span>{selectedProduct.rating} ★★★★★</span>
                    <span className="text-gray-400 text-sm underline">
                      ({selectedProduct.reviews.length} reviews)
                    </span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#0F4C48]">
                  ₹{selectedProduct.price}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-lora">
                {selectedProduct.desc}
              </p>

              {/* Add to Cart Section */}
              <div className="bg-[#F2E9D8]/30 p-6 rounded-xl border border-[#D4A756]/20 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md bg-white">
                    <button className="px-3 py-1 hover:bg-gray-100">-</button>
                    <span className="px-3 font-bold text-[#0F4C48]">1</span>
                    <button className="px-3 py-1 hover:bg-gray-100">+</button>
                  </div>
                  <span className="text-sm text-green-700 font-bold flex items-center gap-1">
                    <CheckIcon /> In Stock
                  </span>
                </div>
                <button className="w-full bg-[#0F4C48] text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#D81B60] transition-colors flex items-center justify-center gap-2">
                  <ShoppingBagIcon /> Add to Cart - ₹{selectedProduct.price}
                </button>
              </div>

              {/* Frequently Bought Together */}
              {related.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-bold text-[#0F4C48] mb-4 border-b border-gray-200 pb-2">
                    Frequently Bought Together
                  </h3>
                  <div className="space-y-4">
                    {related.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 hover:shadow-md cursor-pointer"
                        onClick={() => setSelectedProduct(item)}
                      >
                        <img
                          src={item.images[0]}
                          className="w-16 h-16 rounded-md object-cover"
                          alt={item.name}
                        />
                        <div>
                          <p className="font-bold text-sm text-[#0F4C48]">
                            {item.name}
                          </p>
                          <p className="text-[#D81B60] text-xs font-bold">
                            ₹{item.price}
                          </p>
                        </div>
                        <button className="ml-auto text-xs border border-[#0F4C48] text-[#0F4C48] px-3 py-1 rounded-full hover:bg-[#0F4C48] hover:text-white">
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div className="mt-20">
            <h3 className="text-2xl font-cinzel text-[#0F4C48] mb-8">
              Customer Reviews
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedProduct.reviews.length > 0 ? (
                selectedProduct.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-[#F2E9D8]/30 p-6 rounded-xl border border-[#D4A756]/10"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-[#0F4C48]">
                        {review.user}
                      </span>
                      <span className="text-[#D4A756]">{review.stars}</span>
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No reviews yet. Be the first to review!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- GALLERY VIEW ---
  return (
    <section className="min-h-screen bg-[#F2E9D8] py-12 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-cinzel text-[#0F4C48] mb-4">
            Heritage Marketplace
          </h1>
          <div className="h-1 w-24 bg-[#D81B60] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 font-lora">
            Thoughtful items to honor memories and support healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              // --- DIYĀ GLOW APPLIED ---
              className="bg-white rounded-xl overflow-hidden card-premium shadow-diya hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 bg-[#0F4C48] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#0F4C48] text-lg leading-tight group-hover:text-[#D81B60] transition">
                    {product.name}
                  </h3>
                  <span className="text-[#D81B60] font-bold">
                    ₹{product.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4 text-[#D4A756] text-sm">
                  ★★★★★{" "}
                  <span className="text-gray-400">
                    ({product.reviews.length})
                  </span>
                </div>
                <button className="w-full border-2 border-[#0F4C48] text-[#0F4C48] font-bold py-2 rounded-full group-hover:bg-[#0F4C48] group-hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
