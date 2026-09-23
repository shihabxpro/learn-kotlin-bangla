import {
  BookOpen,
  GitFork,
  Braces,
  ShieldCheck,
  Layers,
  Boxes,
  Sigma,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface LessonMeta {
  id: number;
  slug: string;
  title: string;
  desc: string;
}

export interface ModuleMeta {
  id: number;
  slug: string;
  title: string;
  /** short description used on the roadmap card */
  cardDesc: string;
  /** description used on the module page header */
  moduleDesc: string;
  icon: LucideIcon;
  accent: string;
  lessons: LessonMeta[];
}

export const modules: ModuleMeta[] = [
  {
    id: 1,
    slug: "fundamentals",
    title: "Fundamentals",
    cardDesc: "Kotlin Syntax, Variables ও Data Types এর basic concepts",
    moduleDesc: "Kotlin-এর মৌলিক বিষয়গুলো বাংলায় সহজ উদাহরণ দিয়ে শিখুন",
    icon: BookOpen,
    accent: "#8f6bff",
    lessons: [
      { id: 1, slug: "kotlin-introduction", title: "Kotlin Introduction", desc: "Kotlin-এর পরিচিতি ও ভূমিকা" },
      { id: 2, slug: "kotlin-setup-first-program", title: "Kotlin Setup & First Program", desc: "প্রথম প্রোগ্রাম রান করা" },
      { id: 3, slug: "basic-syntax", title: "Basic Syntax", desc: "Kotlin program-এর syntax structure" },
      { id: 4, slug: "variables-val-var", title: "Variables — val & var", desc: "val এবং var এর পার্থক্য" },
      { id: 5, slug: "data-types", title: "Data Types", desc: "Int, Long, Float, Double, Boolean, Char ও String বিস্তারিত" },
      { id: 6, slug: "type-inference", title: "Type Inference", desc: "স্বয়ংক্রিয়ভাবে Kotlin-এর টাইপ শনাক্তকরণ" },
      { id: 7, slug: "type-conversion", title: "Type Conversion", desc: "এক টাইপ থেকে অন্য টাইপে রূপান্তর" },
      { id: 8, slug: "operators", title: "Operators", desc: "অপারেটরসমূহের ব্যবহার ও হিসাব" },
      { id: 9, slug: "strings-string-templates", title: "Strings & String Templates", desc: "স্ট্রিং ও ডাইনামিক টেমপ্লেট" },
      { id: 10, slug: "comments-code-style", title: "Comments & Code Style", desc: "কমেন্ট এবং ক্লিন কোড লেখার নিয়ম" },
    ],
  },
  {
    id: 2,
    slug: "control-flow",
    title: "Control Flow",
    cardDesc: "Conditions ও Loops দিয়ে program-এর flow নিয়ন্ত্রণ ও decision-making",
    moduleDesc: "Conditions ও Loops এর মাধ্যমে ডিসিশন মেকিং ও রিপিটেশন",
    icon: GitFork,
    accent: "#a45cff",
    lessons: [
      { id: 1, slug: "if-expression", title: "if Expression", desc: "Kotlin-এ if এক্সপ্রেশন হিসেবে" },
      { id: 2, slug: "if-else", title: "if / else", desc: "শর্ত সাপেক্ষে কোড চালানো" },
      { id: 3, slug: "else-if", title: "else if", desc: "একাধিক শর্ত যাচাই" },
      { id: 4, slug: "when-expression", title: "when Expression", desc: "switch-এর শক্তিশালী বিকল্প when" },
      { id: 5, slug: "for-loop", title: "for Loop", desc: "লিস্ট ও রেঞ্জের ওপর পুনরাবৃত্তি" },
      { id: 6, slug: "while-loop", title: "while Loop", desc: "শর্ত ঠিক থাকা পর্যন্ত পুনরাবৃত্তি" },
      { id: 7, slug: "do-while-loop", title: "do-while Loop", desc: "কমপক্ষে একবার চালানো" },
      { id: 8, slug: "ranges", title: "Ranges", desc: "সংখ্যার রেঞ্জ তৈরি ও ব্যবহার" },
      { id: 9, slug: "break", title: "break", desc: "লুপ থামিয়ে দেওয়া" },
      { id: 10, slug: "continue", title: "continue", desc: "বর্তমান ইটারেশন স্কিপ করা" },
    ],
  },
  {
    id: 3,
    slug: "functions",
    title: "Functions",
    cardDesc: "Functions, Parameters ও Return Value দিয়ে clean, reusable code",
    moduleDesc: "Reusable code লিখতে Functions এর সকল ব্যবহার",
    icon: Braces,
    accent: "#b84afe",
    lessons: [
      { id: 1, slug: "function-basics", title: "Function Basics", desc: "fun দিয়ে ফাংশন তৈরি" },
      { id: 2, slug: "function-syntax", title: "Function Syntax", desc: "ফাংশনের সিনট্যাক্স গঠন" },
      { id: 3, slug: "parameters-arguments", title: "Parameters & Arguments", desc: "ইনপুট পাঠানো" },
      { id: 4, slug: "return-values", title: "Return Values", desc: "আউটপুট রিটার্ন করা" },
      { id: 5, slug: "return-type", title: "Return Type", desc: "রিটার্ন টাইপ নির্ধারণ" },
      { id: 6, slug: "default-arguments", title: "Default Arguments", desc: "ডিফল্ট মান নির্ধারণ" },
      { id: 7, slug: "named-arguments", title: "Named Arguments", desc: "নামসহ আর্গুমেন্ট পাঠানো" },
      { id: 8, slug: "single-expression-functions", title: "Single-expression Functions", desc: "এক লাইনের ফাংশন" },
      { id: 9, slug: "local-functions", title: "Local Functions", desc: "ফাংশনের ভেতর ফাংশন" },
      { id: 10, slug: "function-scope", title: "Function Scope", desc: "ফাংশনের পরিধি ও স্কোপ" },
    ],
  },
  {
    id: 4,
    slug: "null-safety",
    title: "Null Safety",
    cardDesc: "Kotlin-এর Null Safety system, Nullable Types, Safe Call ও Elvis Operator",
    moduleDesc: "Null crash রোধে Kotlin-এর শক্তিশালী ফিচার",
    icon: ShieldCheck,
    accent: "#ca3ff2",
    lessons: [
      { id: 1, slug: "understanding-null", title: "Understanding null", desc: "Null reference বোঝা" },
      { id: 2, slug: "nullable-types", title: "Nullable Types", desc: "টাইপে প্রশ্নবোধক চিহ্নের ব্যবহার" },
      { id: 3, slug: "nullable-variables", title: "Nullable Variables", desc: "নাল ভ্যারিয়েবল ডিক্লেয়ারেশন" },
      { id: 4, slug: "safe-call-operator", title: "Safe Call Operator ?.", desc: "নিরাপদে মান অ্যাক্সেস" },
      { id: 5, slug: "elvis-operator", title: "Elvis Operator ?:", desc: "ডিফল্ট ফলব্যাক মান প্রদান" },
      { id: 6, slug: "not-null-assertion", title: "Not-null Assertion !!", desc: "ফোর্স আনর‌্যাপের ঝুঁকি" },
      { id: 7, slug: "safe-cast", title: "Safe Cast as?", desc: "নিরাপদ টাইপ কাস্টিং" },
      { id: 8, slug: "let-with-nullable-values", title: "let with Nullable Values", desc: "নাল না হলে কোড চালানো" },
      { id: 9, slug: "null-safety-with-functions", title: "Null Safety with Functions", desc: "ফাংশন ও নাল সেফটি" },
      { id: 10, slug: "common-null-safety-mistakes", title: "Common Null Safety Mistakes", desc: "সাধারণ ভুলসমূহ ও সমাধান" },
    ],
  },
  {
    id: 5,
    slug: "collections",
    title: "Collections",
    cardDesc: "List, Set, Map ও collection operations দিয়ে ডেটা হ্যান্ডলিং",
    moduleDesc: "একাধিক data সংরক্ষণ ও process করার নিয়ম",
    icon: Layers,
    accent: "#d945c4",
    lessons: [
      { id: 1, slug: "collection-basics", title: "Collection Basics", desc: "কালেকশনের মূল ধারণা" },
      { id: 2, slug: "list", title: "List", desc: "অর্ডারড ডেটা সংগ্রহ" },
      { id: 3, slug: "mutable-list", title: "MutableList", desc: "পরিবর্তনযোগ্য লিস্ট" },
      { id: 4, slug: "set", title: "Set", desc: "ইউনিক উপাদান সংগ্রহ" },
      { id: 5, slug: "mutable-set", title: "MutableSet", desc: "পরিবর্তনযোগ্য সেট" },
      { id: 6, slug: "map", title: "Map", desc: "Key-value পেয়ার সংগ্রহ" },
      { id: 7, slug: "mutable-map", title: "MutableMap", desc: "পরিবর্তনযোগ্য ম্যাপ" },
      { id: 8, slug: "iterating-collections", title: "Iterating Collections", desc: "কালেকশনের ভেতর লুপ" },
      { id: 9, slug: "collection-operations", title: "Collection Operations", desc: "ফিল্টারিং, ম্যাপিং ইত্যাদি" },
      { id: 10, slug: "sorting-searching", title: "Sorting & Searching", desc: "সাজানো ও অনুসন্ধান" },
    ],
  },
  {
    id: 6,
    slug: "object-oriented-kotlin",
    title: "Object-Oriented Kotlin",
    cardDesc: "Class, Object, Inheritance ও Interface-এর মাধ্যমে Object-Oriented Programming-এর ভিত্তি",
    moduleDesc: "OOP-র মাধ্যমে real-world program সাজানো",
    icon: Boxes,
    accent: "#e24462",
    lessons: [
      { id: 1, slug: "classes-objects", title: "Classes & Objects", desc: "ক্লাস ও অবজেক্ট তৈরি" },
      { id: 2, slug: "properties", title: "Properties", desc: "ক্লাসের প্রোপার্টি" },
      { id: 3, slug: "member-functions", title: "Member Functions", desc: "ক্লাসের মেথড" },
      { id: 4, slug: "primary-constructor", title: "Primary Constructor", desc: "প্রাইমারি কনস্ট্রাক্টর" },
      { id: 5, slug: "secondary-constructor", title: "Secondary Constructor", desc: "সেকেন্ডারি কনস্ট্রাক্টর" },
      { id: 6, slug: "init-block", title: "init Block", desc: "ইনিশিয়ালাইজেশন ব্লক" },
      { id: 7, slug: "visibility-modifiers", title: "Visibility Modifiers", desc: "পাবলিক, প্রাইভেট ইত্যাদি" },
      { id: 8, slug: "inheritance", title: "Inheritance", desc: "উত্তরাধিকার ও open কিওয়ার্ড" },
      { id: 9, slug: "method-overriding", title: "Method Overriding", desc: "মেথড ওভাররাইড করা" },
      { id: 10, slug: "interfaces", title: "Interfaces", desc: "ইন্টারফেস ও পলিমরফিজম" },
      { id: 11, slug: "abstract-classes", title: "Abstract Classes", desc: "অ্যাবস্ট্রাক্ট ক্লাস" },
      { id: 12, slug: "data-classes", title: "Data Classes", desc: "ডেটা সংরক্ষণের ক্লাস" },
      { id: 13, slug: "enum-classes", title: "Enum Classes", desc: "ফিক্সড কনস্ট্যান্টস" },
    ],
  },
  {
    id: 7,
    slug: "functional-kotlin",
    title: "Functional Kotlin",
    cardDesc: "Lambda ও Higher-Order Functions দিয়ে Functional Programming-এর সুবিধা",
    moduleDesc: "Functional Programming-এর মাধ্যমে কোড সংক্ষেপণ",
    icon: Sigma,
    accent: "#f06855",
    lessons: [
      { id: 1, slug: "functional-programming-basics", title: "Functional Programming Basics", desc: "ফাংশনাল প্রোগ্রামিংয়ের ধারণা" },
      { id: 2, slug: "lambda-expressions", title: "Lambda Expressions", desc: "ল্যাম্বডা এক্সপ্রেশন তৈরি" },
      { id: 3, slug: "lambda-parameters", title: "Lambda Parameters", desc: "ডিফল্ট it প্যারামিটার" },
      { id: 4, slug: "function-types", title: "Function Types", desc: "ফাংশনের টাইপ ডিক্লেয়ার" },
      { id: 5, slug: "higher-order-functions", title: "Higher-Order Functions", desc: "প্যারামিটারে ফাংশন গ্রহণ" },
      { id: 6, slug: "anonymous-functions", title: "Anonymous Functions", desc: "নামহীন ফাংশন" },
      { id: 7, slug: "map-filter-foreach", title: "map, filter & forEach", desc: "কালেকশন প্রসেসিং ফাংশন" },
      { id: 8, slug: "scope-functions", title: "Scope Functions", desc: "স্কোপ ফাংশন পরিচিতি" },
      { id: 9, slug: "scope-functions-deep-dive", title: "let, run, with, apply & also", desc: "পাঁচটি স্কোপ ফাংশন" },
      { id: 10, slug: "sequences", title: "Sequences", desc: "লেজি ইভ্যালুয়েশন" },
      { id: 11, slug: "function-references", title: "Function References", desc: ":: অপারেটরের ব্যবহার" },
      { id: 12, slug: "combining-functional-operations", title: "Combining Functional Operations", desc: "একাধিক মেথড চেইনিং" },
    ],
  },
  {
    id: 8,
    slug: "advanced-kotlin",
    title: "Advanced Kotlin",
    cardDesc: "Generics, Extension Functions ও Coroutines সহ Advanced Kotlin concepts",
    moduleDesc: "Advanced concepts দিয়ে প্রো Kotlin developer হওয়া",
    icon: Rocket,
    accent: "#fe8a3c",
    lessons: [
      { id: 1, slug: "generics", title: "Generics", desc: "টাইপ সেফটি ও জেনেরিক ক্লাস" },
      { id: 2, slug: "generic-functions", title: "Generic Functions", desc: "জেনেরিক মেথড" },
      { id: 3, slug: "generic-constraints", title: "Generic Constraints", desc: "বাউন্ডেড টাইপ প্যারামিটার" },
      { id: 4, slug: "extension-functions", title: "Extension Functions", desc: "বিদ্যমান ক্লাসে নতুন মেথড যোগ" },
      { id: 5, slug: "extension-properties", title: "Extension Properties", desc: "বিদ্যমান ক্লাসে প্রোপার্টি যোগ" },
      { id: 6, slug: "object-declarations", title: "Object Declarations", desc: "সিঙ্গেলটন প্যাটার্ন" },
      { id: 7, slug: "companion-objects", title: "Companion Objects", desc: "স্ট্যাটিকের বিকল্প" },
      { id: 8, slug: "delegation", title: "Delegation", desc: "by কিওয়ার্ড ও ডেলিগেশন" },
      { id: 9, slug: "sealed-classes", title: "Sealed Classes", desc: "রেস্ট্রিক্টেড ক্লাস হায়ারার্কি" },
      { id: 10, slug: "exception-handling", title: "Exception Handling", desc: "try, catch, finally ও কাস্টম এরর" },
      { id: 11, slug: "coroutines-introduction", title: "Coroutines Introduction", desc: "অ্যাসিঙ্ক্রোনাস ও নন-ব্লকিং কোড" },
      { id: 12, slug: "suspend-functions", title: "suspend Functions", desc: "সাসপেন্ডিং মেথড তৈরি" },
      { id: 13, slug: "coroutine-builders", title: "Coroutine Builders", desc: "launch ও async এর পার্থক্য" },
      { id: 14, slug: "coroutine-context-dispatchers", title: "Coroutine Context & Dispatchers", desc: "থ্রেড ডিসপ্যাচিং" },
      { id: 15, slug: "structured-concurrency", title: "Structured Concurrency", desc: "কো-রুটিন স্কোপ ও লাইফসাইকেল" },
    ],
  },
];

/* retained for the roadmap deck (cards render from this array) */
export const milestones = modules;

export const findModule = (slug?: string) =>
  modules.find((m) => m.slug === slug);

export const findLesson = (moduleSlug?: string, lessonSlug?: string) => {
  const module = findModule(moduleSlug);
  const lesson = module?.lessons.find((l) => l.slug === lessonSlug);
  return module && lesson ? { module, lesson } : null;
};
