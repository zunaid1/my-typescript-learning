🎯 Interview Questions - প্রশ্নোত্তর
# What are some differences between interfaces and types in TypeScript?
TypeScript-এ interface এবং type দুটোই object-এর structure define করার জন্য ব্যবহার করা হয়, কিন্তু তাদের মধ্যে কিছু পার্থক্য আছে। interface সাধারণত শুধুমাত্র object shape define করতে ব্যবহার হয় এবং এটি সহজে extend করা যায় এবং একই নামের multiple interface একসাথে mergeও করা যায়। অন্যদিকে type বেশি flexible, এটি শুধু object না, বরং union, intersection, primitive type ইত্যাদিও define করতে পারে। তবে type merge support করে না। সাধারণভাবে object-based design-এর জন্য interface ভালো, আর complex type logic বা union type এর জন্য type বেশি উপযোগী।

# What is the use of the keyof keyword in TypeScript? Provide an example.
keyof TypeScript-এর একটি utility keyword, যা কোনো object type-এর সব keys-কে union type হিসেবে বের করতে ব্যবহার করা হয়। অর্থাৎ এটি একটি object-এর property নামগুলোকে type হিসেবে ব্যবহার করার সুযোগ দেয়, ফলে type safety বাড়ে এবং ভুল key ব্যবহার করা থেকে রক্ষা পাওয়া যায়।

type User = {
name: string;
age: number;
email: string;
};

type UserKeys = keyof User;
// "name" | "age" | "email"
এখন আমরা এটি ব্যবহার করে একটি function লিখতে পারি:

function getValue(obj: User, key: keyof User) {
return obj[key];
}

const user = {
name: "Zunaid",
age: 25,
email: "test@example.com"
};

console.log(getValue(user, "name"));

এখানে keyof User নিশ্চিত করছে যে শুধুমাত্র "name" | "age" | "email" এই তিনটি key-ই ব্যবহার করা যাবে, অন্য কোনো ভুল key দিলে TypeScript error দেখাবে।

# Explain the difference between any, unknown, and never types in TypeScript.
TypeScript-এ `any`, `unknown`, এবং `never` তিনটি বিশেষ type আছে যেগুলোর ব্যবহার আলাদা উদ্দেশ্যে করা হয়। `any` হলো সবচেয়ে flexible type—এতে যেকোনো ধরনের value রাখা যায় এবং TypeScript কোনো type checking করে না, তাই এটি নিরাপদ নয়। `unknown` ও যেকোনো value গ্রহণ করতে পারে, কিন্তু এটি ব্যবহার করার আগে অবশ্যই type check বা type assertion করতে হয়, তাই এটি `any` থেকে বেশি safe। অন্যদিকে `never` এমন একটি type যা কখনো কোনো value ধারণ করে না, সাধারণত এমন function-এ ব্যবহার হয় যেটি কখনো return করে না (যেমন error throw করে বা infinite loop থাকে)।

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
TypeScript-এ enum ব্যবহার করা হয় named constant values define করার জন্য, যাতে related values গুলোকে একটি group-এর মধ্যে রাখা যায় এবং code আরও readable ও maintainable হয়। Enum সাধারণত fixed set of values (যেমন status, direction, roles) handle করতে ব্যবহৃত হয়। TypeScript-এ দুই ধরনের enum আছে: numeric enum এবং string enum। Numeric enum-এ values automatically number হিসেবে assign হয়, আর string enum-এ প্রতিটি value manually string হিসেবে define করতে হয়।

Example:
// Numeric Enum
enum Direction {
Up,
Down,
Left,
Right
}

// String Enum
enum Role {
Admin = "ADMIN",
User = "USER",
Guest = "GUEST"
}
