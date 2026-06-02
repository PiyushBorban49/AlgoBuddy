'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/mergedlists/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/mergedlists/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/merge/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/merge/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListMerge.js',
    python:'linked_list_merge.py',
    java:'LinkedListMerge.java',
    c:'linked_list_merge.c',
    cpp:'linked_list_merge.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListMergeCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListMergeCode;