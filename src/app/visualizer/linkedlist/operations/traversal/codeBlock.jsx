'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/traversal/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/traversal/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/traversal/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/traversal/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListTraversal.js',
    python:'linked_list_traversal.py',
    java:'LinkedListTraversal.java',
    c:'linked_list_traversal.c',
    cpp:'linked_list_traversal.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListTraversalCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListTraversalCode;