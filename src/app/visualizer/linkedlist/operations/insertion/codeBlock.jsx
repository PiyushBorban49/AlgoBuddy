'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/insertion/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/insertion/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/insertion/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/insertion/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListInsertion.js',
    python:'linked_list_insertion.py',
    java:'LinkedListInsertion.java',
    c:'linked_list_insertion.c',
    cpp:'linked_list_insertion.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListInsertionCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListInsertionCode;