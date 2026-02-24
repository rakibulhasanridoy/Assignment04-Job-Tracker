

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById(id)-    আগে থেকেই  রাখা আইডি সহ প্রথম উপাদানটি ফেরত পাঠায়। যেহেতু আইডিগুলি অবশ্যই একরকম হতে হবে,তাই এটি দ্রুততম পদ্ধতি।
getElementsByClassName(className)-       নির্দিষ্ট ক্লাস(is) সহ সকল উপাদানের একটি লাইভ কালেকশন প্রদান করে। DOM পরিবর্তন হলে কালেকশনটি একা একাই আপডেট হয়।
querySelector(selector)-  CSS সিলেকTo্ট্রের সাথে মেলে এমন প্রথম এলেমেন্ট ফেরত পাঠায় (যেমন, ".btn", "#main", "div > p")।
querySelectorAll(selector)-      CSS সিলেক্টরের সাথে মিলে যাওয়া সকল েলিমেন্টের একটি স্ট্যাটিক তালিকা প্রদান করে। DOM-এর পরিবর্তন সিলেকশনের পরে তালিকাকে চেঞ্জ করে না।


### 2. How do you create and insert a new element into the DOM?
Create the element using document.createElement(tagName).

I will Insert it into the DOM using methods like appendChild, insertBefore, append, or prepend.

### 3. What is Event Bubbling? And how does it work?
ইভেন্ট বাবলিং হল এমন একটি প্রক্রিয়া যেখানে একটি নেস্টেড এলিমেন্টে ট্রিগার হওয়া একটি ইভেন্ট DOM ট্রিতে থাকা তার পূর্বসূরীদের মাধ্যমে "বাবল আপ" হয়। ইভেন্টটি প্রথমে তার হ্যান্ডলারগুলিকে টার্গেট এলিমেন্টে, তারপর তার প্যারেন্টে, তারপর প্যারেন্টের প্যারেন্টে, এবং এভাবেই চালায়, যতক্ষণ না এটি রুটে (ডকুমেন্ট) পৌঁছায়।

### 4. What is Event Delegation in JavaScript? Why is it useful?
ইভেন্ট ডেলিগেশন হল এমন একটি কৌশল যেখানে আমি একাধিক বর্তমান বা ভবিষ্যতের চাইল্ড এলিমেন্টের ইভেন্ট পরিচালনা করার জন্য একটি একক ইভেন্ট লিসেনারকে একটি প্যারেন্ট এলিমেন্টের সাথে সংযুক্ত করতে পারি. এটি ইভেন্ট বাবলিংয়ের উপর নির্ভর করে: যখন কোনও চাইল্ডে কোনও ঘটনা ঘটে, তখন এটি প্যারেন্টের কাছে বাবল হয়ে যায়, যেখানে লিসেনার এটি সনাক্ত করতে এবং পরিচালনা করতে পারে।

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): ইভেন্টের সাথে সম্পর্কিত ডিফল্ট অ্যাকশন বাতিল করে। 
stopPropagation(): ইভেন্টটিকে DOM ট্রিতে বাবলিং হতে বাধা দেয়। 

---
