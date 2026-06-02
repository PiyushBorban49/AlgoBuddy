'use client';

import CodeBlock from '@/app/components/ui/CodeBlock';
<<<<<<<< HEAD:app/visualizer/linkedlist/deletion/codeBlock.jsx
import CodeExamples from '@/app/visualizer/linkedlist/deletion/data/codeExamples.json';
========
import CodeExamples from '@/app/visualizer/linkedlist/operations/deletion/data/codeExamples.json';
>>>>>>>> upstream/main:src/app/visualizer/linkedlist/operations/deletion/codeBlock.jsx

// ─── Code Examples ─────────────────────────────
const codeExamples = CodeExamples;

// ─── Filenames ─────────────────────────────
const fileNames = {
    javascript:'linkedListDeletion.js',
    python:'linked_list_deletion.py',
    java:'LinkedListDeletion.java',
    c:'linked_list_deletion.c',
    cpp:'linked_list_deletion.cpp'
};

// ─── Component ─────────────────────────────
const LinkedListDeletionCode = () => (
    <CodeBlock
        variant="macos"
        codeExamples={codeExamples}
        fileNames={fileNames}
    />
);

export default LinkedListDeletionCode;