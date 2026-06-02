'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/reverselinkedlist/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/reverselinkedlist/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/reverse/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/reverse/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListReverse.js',
    python:'linked_list_reverse.py',
    java:'LinkedListReverse.java',
    c:'linked_list_reverse.c',
    cpp:'linked_list_reverse.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListReverseCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListReverseCode;