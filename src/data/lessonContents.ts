export interface SyntaxItem {
  term: string;
  desc: string;
}

export interface NoteItem {
  id: number;
  title: string;
  desc?: string;
  code?: string;
  footer?: string;
  correct?: string;
  wrong?: string;
  note?: string;
}

export interface CodeExampleBlock {
  intro?: string;
  filename?: string;
  code: string;
  footer?: string;
}

export interface OutputBlock {
  label?: string;
  lines: string[];
  note?: string;
}

export interface LessonContentData {
  // 1. Concept Explanation
  conceptExplanation: {
    title: string;
    paragraphs: string[];
  };
  // 2. Key Points
  keyPoints: {
    title: string;
    points: string[];
  };
  // 3. Kotlin Syntax
  syntax: {
    title: string;
    intro: string;
    code: string;
    items: SyntaxItem[];
    note?: string;
  };
  // 4. Code Example
  codeExample: {
    title: string;
    filename?: string;
    code?: string;
    explanations?: string[];
    blocks?: CodeExampleBlock[];
  };
  // 5. Expected Output
  expectedOutput: {
    title: string;
    lines?: string[];
    note?: string;
    blocks?: OutputBlock[];
  };
  // 6. Important Notes / Common Mistakes
  importantNotes: {
    title: string;
    items: NoteItem[];
  };
  // 7. Practice Task
  practiceTask: {
    title: string;
    instruction: string;
    outputLines: string[];
    condition: string;
  };
}

export const lessonContents: Record<string, LessonContentData> = {
  // Key format: `${moduleSlug}/${lessonSlug}`
  "fundamentals/kotlin-introduction": {
    conceptExplanation: {
      title: "১. Concept Explanation (মূল ধারণা)",
      paragraphs: [
        "Kotlin হলো একটি আধুনিক প্রোগ্রামিং ল্যাঙ্গুয়েজ, যা JetBrains তৈরি করেছে। বর্তমানে Android app development-এর জন্য Kotlin সবচেয়ে জনপ্রিয় ও অফিশিয়াল ল্যাঙ্গুয়েজ।",
        "Kotlin দিয়ে শুধু Android App নয়, বরং সার্ভার সাইড (backend) অ্যাপ্লিকেশন, ডেস্কটপ অ্যাপ্লিকেশন এবং ওয়েব সফটওয়্যারও তৈরি করা যায়।",
        "Kotlin-এর সাথে Java-এর শতভাগ ইন্টারঅপারেবিলিটি রয়েছে। এর মানে হলো একটি Kotlin প্রজেক্টে অনায়াসেই বিদ্যমান Java code ও Java libraries ব্যবহার করা যায়।",
        "এই লেসনে আমরা Kotlin-এর মৌলিক ধারণা এবং একটি সহজ Kotlin প্রোগ্রাম লেখার গঠন শিখব।",
        "প্রথম প্রোগ্রামে আমরা কনসোলে একটি টেক্সট মেসেজ প্রিন্ট করব।",
      ],
    },
    keyPoints: {
      title: "২. Key Points (গুরুত্বপূর্ণ পয়েন্ট)",
      points: [
        "Kotlin একটি আধুনিক, স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ল্যাঙ্গুয়েজ।",
        "Kotlin-এর সিনট্যাক্স খুবই সংক্ষিপ্ত ও পাঠযোগ্য (readable)।",
        "Android development-এ Kotlin হলো প্রথম পছন্দের অফিশিয়াল ভাষা।",
        "Kotlin ও Java সম্পূর্ণ ইন্টারঅপারেবল।",
        "যেকোনো Kotlin প্রোগ্রামের এক্সিকিউশন শুরু হয় main() ফাংশন দিয়ে।",
        "println() দিয়ে কনসোলে নতুন লাইনে আউটপুট দেখানো হয়।",
        "Kotlin কোড .kt এক্সটেনশন বিশিষ্ট ফাইলে সংরক্ষণ করা হয়।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax (সিনট্যাক্স গঠন)",
      intro: "একটি সাধারণ বেসিক Kotlin প্রোগ্রাম গঠন:",
      code: `fun main() {
    println("Hello, Kotlin!")
}`,
      items: [
        { term: "fun", desc: "ফাংশন ডিক্লেয়ার করার জন্য ব্যবহৃত কিওয়ার্ড।" },
        { term: "main()", desc: "প্রোগ্রামের এন্ট্রি পয়েন্ট যেখান থেকে কোড চলা শুরু হয়।" },
        { term: "{ }", desc: "ফাংশনের বডি যার ভেতরে সমস্ত কোড স্টেটমেন্ট লেখা থাকে।" },
        { term: "println()", desc: "কনসোলে টেক্সট আউটপুট প্রিন্ট করার বিল্ট-ইন ফাংশন।" },
        { term: '"Hello, Kotlin!"', desc: "প্রিন্ট করার জন্য নির্দিষ্ট String মান।" },
      ],
      note: "Kotlin-এ প্রতিটি স্টেটমেন্টের শেষে সেমিকোলন (;) দেওয়া ঐচ্ছিক, সাধারণত দেওয়া হয় না।",
    },
    codeExample: {
      title: "৪. Code Example (কোড উদাহরণ)",
      filename: "Main.kt",
      code: `fun main() {
    println("Hello, Kotlin!")
    println("I am learning Kotlin.")
}`,
      explanations: [
        "এই প্রোগ্রামে দুটি println() স্টেটমেন্ট ব্যবহার করা হয়েছে।",
        "প্রথম লাইনে 'Hello, Kotlin!' এবং পরের লাইনে 'I am learning Kotlin.' আউটপুট হিসেবে প্রদর্শিত হবে।",
      ],
    },
    expectedOutput: {
      title: "৫. Expected Output (প্রত্যাশিত আউটপুট)",
      lines: ["Hello, Kotlin!", "I am learning Kotlin."],
      note: "প্রতিটি println() আলাদা নতুন লাইনে আউটপুট প্রদর্শন করে।",
    },
    importantNotes: {
      title: "৬. Important Notes / Common Mistakes",
      items: [
        {
          id: 1,
          title: "১. main() ফাংশনের নাম সঠিক রাখা",
          desc: "Kotlin প্রোগ্রামের এক্সিকিউশনের জন্য main নামটি ছোট হাতের অক্ষরে হতে হবে।",
          code: `fun main() {\n    // কোড\n}`,
          footer: "Main() বা MAIN() লিখলে প্রোগ্রাম রান হবে না।",
        },
        {
          id: 2,
          title: "২. println()-এর বানান লক্ষ্য রাখা",
          correct: 'println("Hello")',
          wrong: 'printIn("Hello")',
          note: "এখানে 'l' ও 'n' রয়েছে (Print Line), বড় হাতের 'I' নয়।",
        },
        {
          id: 3,
          title: "৩. String-এ ডাবল কোটেশন ব্যবহার",
          correct: 'println("Hello")',
          wrong: "println(Hello)",
        },
        {
          id: 4,
          title: "৪. কার্লি ব্র্যাকেট { } মেলানো",
          desc: "ফাংশনের শুরু ও শেষে ব্র্যাকেট সমানভাবে ক্লোজ করতে হবে।",
          code: `fun main() {\n    println("Hello")\n}`,
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task (অনুশীলনমূলক কাজ)",
      instruction: "একটি Kotlin প্রোগ্রাম লিখুন যা নিচের তিনটি লাইন হুবহু আউটপুটে প্রিন্ট করবে:",
      outputLines: [
        "My name is Shihab.",
        "I am learning Kotlin.",
        "Kotlin is interesting.",
      ],
      condition: "প্রতিটি লাইন প্রিন্ট করার জন্য আলাদা println() ব্যবহার করুন।",
    },
  },
  "fundamentals/kotlin-setup-first-program": {
    conceptExplanation: {
      title: "১. Concept Explanation (মূল ধারণা)",
      paragraphs: [
        "Kotlin কোড রান করার জন্য আপনার একটি Kotlin ডেভেলপমেন্ট এনভায়রনমেন্ট প্রয়োজন।",
        "Kotlin কোড রান করার জন্য IntelliJ IDEA, Android Studio অথবা অনলাইন প্লেগ্রাউন্ড ব্যবহার করা যায়।",
        "Kotlin প্রজেক্টে .kt এক্সটেনশনযুক্ত ফাইলের ভেতরে কোড লিখতে হয়।",
        "এই লেসনে আমরা একটি বেসিক Kotlin ফাইল তৈরি করব এবং প্রোগ্রাম সফলভাবে চালিয়ে কনসোল আউটপুট যাচাই করব।",
        "যেকোনো প্রোগ্রামিং ভাষায় প্রথম প্রোগ্রামটিকে ঐতিহ্যগতভাবে Hello World প্রোগ্রাম বলা হয়।",
      ],
    },
    keyPoints: {
      title: "২. Key Points (গুরুত্বপূর্ণ পয়েন্ট)",
      points: [
        "Kotlin সোর্স ফাইল .kt এক্সটেনশনে সেভ হয়।",
        "প্রোগ্রামের শুরু সবসময় main() ফাংশন দিয়ে হয়।",
        "println() স্টেটমেন্ট দিয়ে আউটপুট স্ক্রিনে প্রিন্ট করা যায়।",
        "কোড রান বাটন চাপলে কম্পাইলার কোডটি কম্পাইল করে এক্সিকিউট করে।",
        "প্রথম প্রোগ্রাম রান করার মাধ্যমে এনভায়রনমেন্ট সেটআপ নিশ্চিত হয়।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "বেসিক Kotlin ফাইল গঠন:",
      code: `fun main() {
    println("Hello, Kotlin!")
}`,
      items: [
        { term: "fun", desc: "ফাংশন তৈরির কিওয়ার্ড।" },
        { term: "main()", desc: "প্রোগ্রামের প্রধান এন্ট্রি পয়েন্ট।" },
        { term: "{ }", desc: "ফাংশনের বডির শুরু ও শেষ নির্দেশ করে।" },
        { term: "println()", desc: "আউটপুট প্রিন্ট করার ফাংশন।" },
        { term: '"Hello, Kotlin!"', desc: "প্রিন্ট করা স্ট্রিং ডাটা।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      blocks: [
        {
          intro: "একটি সহজ প্রথম Kotlin ফাইল কোড:",
          filename: "Main.kt",
          code: `fun main() {
    println("Hello, Kotlin!")
}`,
          footer: "রান করলে এটি কনসোলে Hello, Kotlin! দেখাবে।",
        },
        {
          intro: "একাধিক লাইন প্রিন্ট করার উদাহরণ:",
          filename: "Main.kt",
          code: `fun main() {
    println("My first Kotlin program")
    println("I am ready to learn Kotlin.")
}`,
        },
      ],
    },
    expectedOutput: {
      title: "৫. Expected Output",
      blocks: [
        {
          label: "প্রথম প্রোগ্রামের আউটপুট:",
          lines: ["Hello, Kotlin!"],
        },
        {
          label: "দ্বিতীয় প্রোগ্রামের আউটপুট:",
          lines: [
            "My first Kotlin program",
            "I am ready to learn Kotlin.",
          ],
        },
      ],
    },
    importantNotes: {
      title: "৬. Important Notes / Common Mistakes",
      items: [
        {
          id: 1,
          title: "১. File extension",
          desc: "সব Kotlin ফাইল .kt এক্সটেনশন দিয়ে সেভ করতে হয়।",
          code: "Main.kt",
          footer: "যেমন Main.kt",
        },
        {
          id: 2,
          title: "২. main() ফাংশন বাধ্যতামূলক",
          desc: "রান করার জন্য ফাইলে অবশ্যই main() ফাংশন থাকতে হবে।",
          code: `fun main() {\n    // code\n}`,
        },
        {
          id: 3,
          title: "৩. কেস সেনসিটিভিটি",
          correct: 'println("Hello")',
          note: "Kotlin কেস-সেনসিটিভ, ছোট-বড় হাতের অক্ষর ঠিক রাখা জরুরি।",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "একটি Kotlin প্রোগ্রাম লিখুন যা নিচের আউটপুট দেখাবে:",
      outputLines: [
        "Welcome to Kotlin!",
        "My name is Shihab.",
        "This is my first Kotlin program.",
      ],
      condition: "প্রতিটি লাইন আলাদা println() দিয়ে প্রিন্ট করুন।",
    },
  },
  "fundamentals/basic-syntax": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "Kotlin-এর সিনট্যাক্স খুবই পরিচ্ছন্ন এবং পড়তে আরামদায়ক।",
        "Kotlin প্রোগ্রামের স্টেটমেন্টগুলো উপর থেকে নিচে ক্রমান্বয়ে এক্সিকিউট হয়।",
        "এই লেসনে আমরা print() এবং println()-এর পার্থক্য শিখব।",
        "print() নতুন লাইন তৈরি করে না, কিন্তু println() আউটপুট দেওয়ার পর নতুন লাইন যোগ করে।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "সিনট্যাক্স হলো কোড লেখার ব্যাকরণ।",
        "স্টেটমেন্টগুলো ক্রমান্বয়ে চলে।",
        "println() স্বয়ংক্রিয়ভাবে নতুন লাইনে কার্সর নিয়ে যায়।",
        "print() একই লাইনে আউটপুট রাখে।",
        "স্টেটমেন্টের শেষে সেমিকোলন দেওয়া লাগে না।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "বেসিক সিনট্যাক্স গঠন:",
      code: `fun main() {
    print("নাম: ")
    println("শিহাব")
}`,
      items: [
        { term: "fun", desc: "ফাংশন ডিফাইন করে।" },
        { term: "main()", desc: "মেইন ফাংশন।" },
        { term: "{ }", desc: "ফাংশন স্কোপ।" },
        { term: "print()", desc: "একই লাইনে প্রিন্ট করে।" },
        { term: "println()", desc: "নতুন লাইনে প্রিন্ট করে।" },
      ],
      note: "সেমিকোলন দেওয়া সম্পূর্ণ ঐচ্ছিক।",
    },
    codeExample: {
      title: "৪. Code Example",
      filename: "Main.kt",
      code: `fun main() {
    print("Kotlin ")
    print("is ")
    println("awesome!")
    println("Learning basic syntax.")
}`,
      explanations: [
        "প্রথম তিনটি print() মিলে একই লাইনে 'Kotlin is awesome!' তৈরি করে।",
        "পরের println() নতুন লাইনে 'Learning basic syntax.' প্রিন্ট করে।",
      ],
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["Kotlin is awesome!", "Learning basic syntax."],
      note: "print() এবং println() এর সম্মিলিত প্রভাব লক্ষ্য করুন।",
    },
    importantNotes: {
      title: "৬. Important Notes / Common Mistakes",
      items: [
        {
          id: 1,
          title: "১. print() বনাম println()",
          desc: "print(\"A\") ও print(\"B\") মিলে AB হবে, কিন্তু println(\"A\") ও println(\"B\") দুটি আলাদা লাইন হবে।",
        },
        {
          id: 2,
          title: "২. সেমিকোলন পরিহার",
          correct: 'println("Hello")',
          wrong: 'println("Hello");',
          note: "Kotlin কনভেনশনে সেমিকোলন না দেওয়া স্ট্যান্ডার্ড।",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "print() এবং println() ব্যবহার করে নিচের আউটপুটটি তৈরি করুন:",
      outputLines: [
        "Welcome to Kotlin syntax practice.",
        "Name: Shihab | Role: Student",
      ],
      condition: "Name: Shihab | অংশে print() ব্যবহার করুন।",
    },
  },
  "fundamentals/variables-val-var": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "ভেরিয়েবল (Variable) হলো মেমোরিতে ডাটা বা মান সংরক্ষণ করার পাত্র বা কন্টেইনার।",
        "একটি ভেরিয়েবলের নাম দিয়ে আমরা সেই সংরক্ষিত মান পরে কোডে ব্যবহার বা পরিবর্তন করতে পারি।",
        "Kotlin-এ ভেরিয়েবল ডিক্লেয়ার করার জন্য দুটি প্রধান কিওয়ার্ড রয়েছে: val এবং var।",
        "val (Value / Read-only): val দিয়ে ডিক্লেয়ার করা ভেরিয়েবলে একবার মান বসালে আর পরিবর্তন (reassign) করা যায় না। এটি ইমিউটেবল (immutable)।",
        "var (Variable / Mutable): var দিয়ে ডিক্লেয়ার করা ভেরিয়েবলের মান পরবর্তীতে প্রয়োজন অনুযায়ী বারবার পরিবর্তন করা যায়।",
        "কোডকে নিরাপদ ও বাগ-মুক্ত রাখতে Kotlin সবসময় অপ্রয়োজনে var না লিখে val ব্যবহারের পরামর্শ দেয়।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "val হলো read-only এবং immutable (অপরিবর্তনীয় মান)।",
        "var হলো mutable (পরিবর্তনযোগ্য মান)।",
        "ভেরিয়েবলের নাম অর্থপূর্ণ হওয়া উচিত এবং camelCase স্টাইলে লেখা উত্তম (যেমন: birthYear, currentAge)।",
        "একবার ডিক্লেয়ার করা ভেরিয়েবলে ভিন্ন ডেটা টাইপের মান বসানো যায় না।",
        "ডিফল্টভাবে সবসময় val ব্যবহার করা Kotlin-এর বেস্ট প্র্যাকটিস।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "Kotlin-এ val এবং var ডিক্লেয়ার করার নিয়ম:",
      code: `val name = "Shihab"
var score = 10`,
      items: [
        { term: "val", desc: "অপরিবর্তনযোগ্য ভেরিয়েবল কিওয়ার্ড।" },
        { term: "name", desc: "ভেরিয়েবলের নাম।" },
        { term: "=", desc: "অ্যাসাইনমেন্ট অপারেটর।" },
        { term: '"Shihab"', desc: "স্ট্রিং মান।" },
        { term: "var", desc: "পরিবর্তনযোগ্য ভেরিয়েবল কিওয়ার্ড।" },
        { term: "score", desc: "সংখ্যাগত ভেরিয়েবল।" },
      ],
      note: "Kotlin স্বয়ংক্রিয়ভাবে টাইপ বুঝে নিতে পারে (Type Inference)।",
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    // val অপরিবর্তনীয়
    val birthYear = 2002
    println(birthYear)

    // var পরিবর্তনযোগ্য
    var currentAge = 22
    println(currentAge)

    // বয়স পরিবর্তন করা হলো
    currentAge = 23
    println(currentAge)
}`,
      explanations: [
        "birthYear ভেরিয়েবলটি val দিয়ে তৈরি করায় এর মান সারাজীবন 2002 থাকবে।",
        "currentAge ভেরিয়েবলটি var দিয়ে তৈরি করায় প্রথমে 22 ছিল, পরে 23 এ পরিবর্তন করা হয়েছে।",
      ],
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["2002", "22", "23"],
      note: "আউটপুটে ক্রমান্বয়ে মানগুলো দেখা যাচ্ছে।",
    },
    importantNotes: {
      title: "৬. Important Notes / Common Mistakes",
      items: [
        {
          id: 1,
          title: "১. val-এর মান পরিবর্তন করার চেষ্টা",
          desc: "val ভেরিয়েবল reassign করলে কম্পাইলার এরর দেয়: 'Val cannot be reassigned'।",
          wrong: 'val country = "BD"\ncountry = "UK" // Error',
          correct: 'var country = "BD"\ncountry = "UK" // Correct if change is needed',
        },
        {
          id: 2,
          title: "২. টাইপ মিসম্যাচ এরর",
          desc: "একবার যে টাইপের ভেরিয়েবল তৈরি করবেন, পরে সেই ভেরিয়েবলে অন্য টাইপ বসানো যায় না।",
          wrong: 'var score = 100\nscore = "Passed" // Type mismatch error',
          correct: "var score = 100\nscore = 150 // Correct",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "একটি প্রোগ্রাম লিখুন যাতে দেশের নাম (val), বয়স (val), এবং স্কোর (var) থাকবে। স্কোর পরিবর্তন করে আউটপুট প্রিন্ট করুন।",
      outputLines: ["Bangladesh", "50", "100"],
      condition: "সঠিকভাবে val এবং var নির্বাচন করুন।",
    },
  },
  "fundamentals/data-types": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "ডাটা টাইপ নির্দেশ করে একটি ভেরিয়েবলের মধ্যে কোন ধরনের তথ্য সংরক্ষিত আছে।",
        "Kotlin একটি স্ট্যাটিক্যালি টাইপড ল্যাঙ্গুয়েজ। এর মানে প্রতিটি ভেরিয়েবলের টাইপ কম্পাইল সময়ে নির্ধারিত হয়।",
        "Kotlin-এ সব ডাটা টাইপই অবজেক্ট হিসেবে কাজ করে।",
        "প্রধান ডাটা টাইপগুলো হলো: Int, Long, Float, Double, Boolean, Char, এবং String।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "পূর্ণসংখ্যার জন্য Int এবং বড় সংখ্যার জন্য Long।",
        "দশমিকের জন্য Double এবং Float।",
        "একটি অক্ষরের জন্য Char ('A') এবং টেক্সটের জন্য String (\"Hello\")।",
        "সত্য/মিথ্যার জন্য Boolean (true/false)।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "টাইপসহ ভেরিয়েবল ডিক্লেয়ার করার নিয়ম:",
      code: `val age: Int = 22
val pi: Double = 3.1416
val grade: Char = 'A'
val isStudent: Boolean = true
val name: String = "Shihab"`,
      items: [
        { term: "Int", desc: "পূর্ণসংখ্যা।" },
        { term: "Double", desc: "দশমিক সংখ্যা।" },
        { term: "Char", desc: "একক ক্যারেক্টার।" },
        { term: "Boolean", desc: "বুলিয়ান ট্রু/ফলস।" },
        { term: "String", desc: "টেক্সট বা স্ট্রিং।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val studentId: Int = 101
    val cgpa: Double = 3.85
    val section: Char = 'A'
    val isEnrolled: Boolean = true
    val courseName: String = "Kotlin Essentials"

    println(studentId)
    println(cgpa)
    println(section)
    println(isEnrolled)
    println(courseName)
}`,
      explanations: [
        "বিভিন্ন ডাটা টাইপের ভেরিয়েবল তৈরি করে কনসোলে প্রিন্ট করা হলো।",
      ],
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["101", "3.85", "A", "true", "Kotlin Essentials"],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. Char-এ সিঙ্গেল কোটেশন ব্যবহার",
          desc: "Char অবশ্যই সিঙ্গেল কোটেশনের মধ্যে লিখতে হবে।",
          wrong: "val letter: Char = \"A\"",
          correct: "val letter: Char = 'A'",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "আপনার বয়স (Int), উচ্চতা (Double), রক্তের গ্রুপ (Char), এবং শিক্ষার্থী কিনা (Boolean) প্রিন্ট করুন।",
      outputLines: ["22", "5.9", "B", "true", "Kotlin"],
      condition: "টাইপ উল্লেখ করে ভেরিয়েবল তৈরি করুন।",
    },
  },
  "fundamentals/type-inference": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "Type Inference হলো Kotlin-এর এমন একটি চমৎকার সুবিধা যার মাধ্যমে ভেরিয়েবলের প্রাথমিক মান দেখেই কম্পাইলার স্বয়ংক্রিয়ভাবে তার ডাটা টাইপ নির্ধারণ করে নেয়।",
        "যেমন val score = 100 লিখলে Kotlin নিজে থেকেই বুঝে নেয় যে score একটি Int।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "টাইপ না লিখলেও কোড নিরাপদ ও স্ট্যাটিক্যালি টাইপড থাকে।",
        "কোড সংক্ষিপ্ত ও ক্লিন হয়।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "টাইপ ইনফারেন্সের উদাহরণ:",
      code: `val language = "Kotlin"
val year = 2011
val rating = 4.9
val isModern = true`,
      items: [
        { term: "language", desc: "String টাইপ পেয়ে যায়।" },
        { term: "year", desc: "Int টাইপ পেয়ে যায়।" },
        { term: "rating", desc: "Double টাইপ পেয়ে যায়।" },
        { term: "isModern", desc: "Boolean টাইপ পেয়ে যায়।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val title = "Kotlin Android App"
    val downloads = 50000
    val rating = 4.8
    val isOpenSource = true

    println(title)
    println(downloads)
    println(rating)
    println(isOpenSource)
}`,
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["Kotlin Android App", "50000", "4.8", "true"],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. ইনিশিয়ালাইজ ছাড়া টাইপ ইনফারেন্স কাজ করে না",
          desc: "মান না দিলে অবশ্যই টাইপ বলে দিতে হয়।",
          wrong: "val score // Error",
          correct: "val score: Int // Correct",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "টাইপ উল্লেখ না করে অ্যাপের নাম, ভার্সন ও রেটিং প্রিন্ট করুন।",
      outputLines: ["Telegram", "3", "4.7"],
      condition: "টাইপ ইনফারেন্স ব্যবহার করুন।",
    },
  },
  "fundamentals/type-conversion": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "একটি ডাটা টাইপ থেকে অন্য ডাটা টাইপে রূপান্তর করাকে Type Conversion বা Type Casting বলে।",
        "Kotlin-এ ছোট টাইপ স্বয়ংক্রিয়ভাবে বড় টাইপে কনভার্ট হয় না (যেমন Int নিজে নিজে Double হবে না)।",
        "সব রূপান্তর সুস্পষ্টভাবে বিল্ট-ইন ফাংশন দিয়ে করতে হয়।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "সুস্পষ্ট রূপান্তর: toInt(), toDouble(), toLong(), toString() ইত্যাদি।",
        "Double থেকে Int করলে দশমিক অংশ বাদ পড়ে।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "টাইপ কনভার্সন ফাংশন:",
      code: `val a: Int = 10
val b: Double = a.toDouble()
val str: String = "250"
val num: Int = str.toInt()`,
      items: [
        { term: "toDouble()", desc: "Double এ রূপান্তর।" },
        { term: "toInt()", desc: "Int এ রূপান্তর।" },
        { term: "toString()", desc: "String এ রূপান্তর।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val itemsCount: Int = 5
    val averageItems: Double = itemsCount.toDouble()
    val regularPrice: Double = 99.85
    val discountPrice: Int = regularPrice.toInt()
    val amountString: String = "500"
    val totalAmount: Int = amountString.toInt() + 100

    println(averageItems)
    println(discountPrice)
    println(totalAmount)
}`,
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["5.0", "99", "600"],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. অটো কনভার্সন নেই",
          wrong: "val x: Int = 10\nval y: Double = x // Error",
          correct: "val x: Int = 10\nval y: Double = x.toDouble() // Correct",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "একটি Double ভ্যালু 45.75 কে toInt() করুন এবং একটি স্ট্রিং '250' কে ইনটিজারে রূপান্তর করে ৫০ যোগ করুন।",
      outputLines: ["45", "300"],
      condition: "toInt() ব্যবহার করুন।",
    },
  },
  "fundamentals/operators": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "অপারেটর হলো বিশেষ চিহ্ন যা অপারেন্ডগুলোর ওপর গাণিতিক বা যৌক্তিক কাজ সম্পন্ন করে।",
        "Kotlin-এ Arithmetic, Comparison, Assignment, এবং Logical অপারেটর রয়েছে।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "ইনটিজার ভাগের ক্ষেত্রে দশমিক আসে না (যেমন 5 / 2 = 2)।",
        "মডুলাস (%) ভাগশেষ দেয়।",
        "তুলনার জন্য == এবং অ্যাসাইনের জন্য =।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "অপারেটরের ব্যবহার:",
      code: `val sum = 10 + 5
val remainder = 10 % 3
val isEqual = (10 == 5)
var count = 0
count++`,
      items: [
        { term: "+, -, *, /", desc: "যোগ, বিয়োগ, গুণ, ভাগ।" },
        { term: "%", desc: "ভাগশেষ নির্ণয়।" },
        { term: "==", desc: "মান সমান কিনা তুলনা।" },
        { term: "&&, ||", desc: "যৌক্তিক AND ও OR।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val a = 20
    val b = 6

    val sum = a + b
    val difference = a - b
    val product = a * b
    val division = a / b
    val remainder = a % b

    println(sum)
    println(difference)
    println(product)
    println(division)
    println(remainder)

    val isGreater = a > b
    val bothPositive = (a > 0) && (b > 0)
    println(isGreater)
    println(bothPositive)
}`,
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: ["26", "14", "120", "3", "2", "true", "true"],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. পূর্ণসংখ্যা ভাগফলের ট্র্যাপ",
          desc: "5 / 2 এর ফলাফল 2 হবে। দশমিক চাইলে 5.0 / 2 লিখতে হবে।",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "num1 = 15 ও num2 = 4 এর গুণফল, ভাগশেষ এবং num1 > num2 তুলনা প্রিন্ট করুন।",
      outputLines: ["60", "3", "true"],
      condition: "অপারেটর ব্যবহার করুন।",
    },
  },
  "fundamentals/strings-string-templates": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "String হলো অক্ষরের সমষ্টি যা ডাবল কোটেশনের মধ্যে লেখা হয়।",
        "Kotlin-এ স্ট্রিং জোড়া লাগানোর জন্য প্লাস (+) ব্যবহারের পরিবর্তে String Template ($) ব্যবহার করা হয়।",
        "ভেরিয়েবলের জন্য $name এবং এক্সপ্রেশনের জন্য ${a + b} সিনট্যাক্স ব্যবহৃত হয়।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "স্ট্রিং টেমপ্লেট কোডকে পরিচ্ছন্ন ও পাঠযোগ্য করে।",
        "ট্রিপল কোটেশন (\"\"\" ... \"\"\") দিয়ে মাল্টি-লাইন র' স্ট্রিং লেখা যায়।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "স্ট্রিং টেমপ্লেট সিনট্যাক্স:",
      code: `val name = "Shihab"
val age = 22
println("My name is $name")
println("Next year I will be \${age + 1}")`,
      items: [
        { term: "$variable", desc: "ভেরিয়েবল ইন্টারপোলেশন।" },
        { term: "${expression}", desc: "এক্সপ্রেশন ইন্টারপোলেশন।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val language = "Kotlin"
    val version = 2.0
    val rating = 5

    println("Language: $language")
    println("Version: $version")
    println("Target Score: \${rating * 20}%")

    val info = """
        Welcome to $language!
        Enjoy modern programming.
    """.trimIndent()
    println(info)
}`,
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: [
        "Language: Kotlin",
        "Version: 2.0",
        "Target Score: 100%",
        "Welcome to Kotlin!",
        "Enjoy modern programming.",
      ],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. ব্র্যাকেটের প্রয়োজনীয়তা",
          desc: "এক্সপ্রেশন বা মেথড কল করার সময় অবশ্যই ${ } ব্র্যাকেট দিতে হবে।",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "বইয়ের নাম (item = 'Book'), দাম (price = 120), এবং পরিমাণ (quantity = 3) দিয়ে মোট বিল স্ট্রিং টেমপ্লেট দিয়ে বের করুন।",
      outputLines: [
        "Item: Book",
        "Unit Price: 120 BDT",
        "Total Bill: 360 BDT",
      ],
      condition: "স্ট্রিং টেমপ্লেট ব্যবহার করুন।",
    },
  },
  "fundamentals/comments-code-style": {
    conceptExplanation: {
      title: "১. Concept Explanation",
      paragraphs: [
        "কমেন্ট হলো কোডের মধ্যে এমন লেখা যা কম্পাইলার এড়িয়ে যায়। এটি কোড বোঝার সুবিধার জন্য লেখা হয়।",
        "Kotlin-এ সিঙ্গেল লাইন (//) এবং মাল্টি-লাইন (/* ... */) কমেন্ট রয়েছে।",
        "কোড স্টাইলের জন্য ভেরিয়েবলে camelCase এবং ক্লাসে PascalCase অনুসরণ করা হয়।",
      ],
    },
    keyPoints: {
      title: "২. Key Points",
      points: [
        "সিঙ্গেল লাইন কমেন্টের জন্য // ব্যবহার করুন।",
        "মাল্টি লাইন কমেন্টের জন্য /* */ ব্যবহার করুন।",
        "Kotlin কনভেনশন মেনে ক্লিন কোড লিখুন।",
      ],
    },
    syntax: {
      title: "৩. Kotlin Syntax",
      intro: "কমেন্ট ও স্টাইল:",
      code: `// এটি একটি সিঙ্গেল-লাইন কমেন্ট
/*
   এটি মাল্টি-লাইন
   কমেন্ট
*/
val userName = "Shihab" // camelCase`,
      items: [
        { term: "//", desc: "এক লাইনের কমেন্ট।" },
        { term: "/* */", desc: "একাধিক লাইনের কমেন্ট।" },
      ],
    },
    codeExample: {
      title: "৪. Code Example",
      code: `fun main() {
    val studentName = "Shihab"
    val mathScore = 95
    val scienceScore = 88

    val totalScore = mathScore + scienceScore
    val averageScore = totalScore / 2.0

    println("Student: $studentName")
    println("Total: $totalScore")
    println("Average: $averageScore")
}`,
    },
    expectedOutput: {
      title: "৫. Expected Output",
      lines: [
        "Student: Shihab",
        "Total: 183",
        "Average: 91.5",
      ],
    },
    importantNotes: {
      title: "৬. Important Notes",
      items: [
        {
          id: 1,
          title: "১. অর্থপূর্ণ নাম ব্যবহার করুন",
          desc: "a, b এর বদলে descriptive নাম ব্যবহার করুন।",
        },
      ],
    },
    practiceTask: {
      title: "৭. Practice Task",
      instruction: "productPrice এবং discountPercent ভেরিয়েবল নিয়ে ছাড়ের পর দাম কত তা প্রিন্ট করুন।",
      outputLines: [
        "Original Price: 500",
        "Discounted Price: 450.0",
      ],
      condition: "সঠিক camelCase ও কমেন্ট ব্যবহার করুন।",
    },
  },
};

export const getLessonContent = (
  moduleSlug?: string,
  lessonSlug?: string
): LessonContentData | null => {
  if (!moduleSlug || !lessonSlug) return null;
  return lessonContents[`${moduleSlug}/${lessonSlug}`] || null;
};
