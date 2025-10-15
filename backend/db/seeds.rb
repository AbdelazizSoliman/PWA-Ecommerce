# frozen_string_literal: true

ActiveRecord::Base.transaction do
  ProductDetail.destroy_all
  ProductList.destroy_all
  Subcategory.destroy_all
  Category.destroy_all
  HomeSlider.destroy_all
  Notification.destroy_all
  SiteInfo.destroy_all

  site_info = SiteInfo.create!(
    about: "We curate premium lifestyle and technology products for modern shoppers.",
    refund: "Items can be returned within 30 days in their original packaging.",
    parchase_guide: "Browse categories, add items to your cart, and complete checkout securely.",
    privacy: "We respect your privacy and never sell personal data.",
    address: "<strong>Head Office</strong><br />1635 Franklin Street<br />Montgomery, AL 36104<br />Email: support@aurorashop.com",
    android_app_link: "https://play.google.com/store/apps/details?id=com.example.app",
    ios_app_link: "https://apps.apple.com/app/id000000000",
    facbook_link: "https://www.facebook.com/aurorashop",
    twitter_link: "https://twitter.com/aurorashop",
    instagram_link: "https://www.instagram.com/aurorashop",
    copyright_text: "&copy; #{Time.zone.now.year} Aurora Shop. All rights reserved."
  )

  categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      subcategories: ["Laptops", "Headphones", "Smart Home"],
      products: [
        {
          title: "Aurora Ultrabook 14\"",
          price: "1299",
          special_price: "1199",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
          remark: "FEATURED",
          brand: "Aurora",
          star: "5",
          product_code: "EL-001",
          subcategory: "Laptops",
          details: {
            image_one: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
            image_two: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800",
            short_description: "Featherweight aluminium body with 12-hour battery life.",
            long_description: "The Aurora Ultrabook pairs a vibrant 14-inch display with the latest Intel processors, Wi-Fi 6, and a spacious SSD so you can work from anywhere.",
            color: "Silver",
            size: "14-inch"
          }
        },
        {
          title: "Nova Noise-Cancelling Headphones",
          price: "349",
          special_price: "299",
          image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800",
          remark: "NEW",
          brand: "Nova",
          star: "4.5",
          product_code: "EL-002",
          subcategory: "Headphones",
          details: {
            image_one: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800",
            short_description: "Immersive sound with adaptive noise cancellation.",
            long_description: "Block out distractions with Nova's adaptive noise cancelling technology, plush memory foam ear cushions, and up to 32 hours of playback on a single charge.",
            color: "Matte Black"
          }
        }
      ]
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
      subcategories: ["Decor", "Kitchen", "Smart Lighting"],
      products: [
        {
          title: "Lumen Smart Light Bar",
          price: "129",
          special_price: "na",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
          remark: "FEATURED",
          brand: "Lumen",
          star: "4",
          product_code: "HL-001",
          subcategory: "Smart Lighting",
          details: {
            image_one: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
            short_description: "Synchronise lighting scenes with music and movies.",
            long_description: "Create immersive ambiences with the Lumen Smart Light Bar featuring 16 million colours, app control, and voice assistant compatibility.",
            color: "Graphite"
          }
        },
        {
          title: "Cascade Pour-Over Kettle",
          price: "99",
          special_price: "89",
          image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab1b4?w=800",
          remark: "COLLECTION",
          brand: "Cascade",
          star: "4.8",
          product_code: "HL-002",
          subcategory: "Kitchen",
          details: {
            image_one: "https://images.unsplash.com/photo-1523906630133-f6934a1ab1b4?w=800",
            short_description: "Precision gooseneck kettle for craft coffee lovers.",
            long_description: "Brew the perfect pour-over with variable temperature control, real-time LCD feedback, and an ergonomic handle designed for steady pours.",
            color: "Brushed Steel"
          }
        }
      ]
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      subcategories: ["Accessories", "Outerwear", "Footwear"],
      products: [
        {
          title: "Aster Leather Weekender",
          price: "249",
          special_price: "229",
          image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
          remark: "COLLECTION",
          brand: "Aster",
          star: "4.7",
          product_code: "FA-001",
          subcategory: "Accessories",
          details: {
            image_one: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
            short_description: "Handcrafted full-grain leather with spacious compartments.",
            long_description: "The Aster Weekender is built for spontaneous getaways with a premium leather exterior, protective laptop sleeve, and quick-access passport pocket.",
            color: "Chestnut"
          }
        },
        {
          title: "Northwind Parka",
          price: "329",
          special_price: "279",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
          remark: "NEW",
          brand: "Northwind",
          star: "4.6",
          product_code: "FA-002",
          subcategory: "Outerwear",
          details: {
            image_one: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
            short_description: "Waterproof parka with recycled insulation.",
            long_description: "Stay warm in sub-zero conditions with Northwind's seam-sealed parka featuring recycled insulation, storm cuffs, and adjustable hood.",
            color: "Midnight Blue"
          }
        }
      ]
    }
  ]

  categories.each do |category_data|
    category = Category.create!(
      category_name: category_data[:name],
      category_image: category_data[:image]
    )

    category_data[:subcategories].each do |subcategory_name|
      Subcategory.create!(
        category_name: category.category_name,
        subcategory_name: subcategory_name
      )
    end

    category_data[:products].each do |product_data|
      product = ProductList.create!(
        title: product_data[:title],
        price: product_data[:price],
        special_price: product_data[:special_price],
        image: product_data[:image],
        category: category.category_name,
        subcategory: product_data[:subcategory],
        remark: product_data[:remark],
        brand: product_data[:brand],
        star: product_data[:star],
        product_code: product_data[:product_code]
      )

      ProductDetail.create!(
        product_id: product.id,
        image_one: product_data[:details][:image_one],
        image_two: product_data[:details][:image_two],
        image_three: product_data[:details][:image_three],
        image_four: product_data[:details][:image_four],
        short_description: product_data[:details][:short_description],
        long_description: product_data[:details][:long_description],
        color: product_data[:details][:color],
        size: product_data[:details][:size]
      )
    end
  end

  [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    "https://images.unsplash.com/photo-1514996937319-344454492b37?w=1200"
  ].each do |image_url|
    HomeSlider.create!(slider_image: image_url)
  end

  Notification.create!(
    title: "Spring collection now live",
    message: "Discover limited-edition arrivals handpicked for the new season.",
    date: Time.zone.today.strftime("%d-%m-%Y")
  )

  Notification.create!(
    title: "Free express shipping",
    message: "Enjoy complimentary express delivery on orders over $200 this week.",
    date: (Time.zone.today - 2.days).strftime("%d-%m-%Y")
  )

  puts "Seeded site info (##{site_info.id}), categories (#{Category.count}), and products (#{ProductList.count})."
end
