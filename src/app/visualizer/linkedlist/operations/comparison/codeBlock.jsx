'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/comparison/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/comparison/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/comparison/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/comparison/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListComparison.js',
    python:'linked_list_comparison.py',
    java:'LinkedListComparison.java',
    c:'linked_list_comparison.c',
    cpp:'linked_list_comparison.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListComparisonCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListComparisonCode;