# AWS SAA-C03 Practice Test Markdown Spec

## Purpose

Create a readable Markdown study document from `AWS SAA-C03 Dumps.pdf` for self-testing and review.

The generated document should let the learner:

- Answer questions without seeing the correct answers first.
- Review each answer with its explanation after completing the test.
- Quickly check only the final answer letters when needed.

## Source

- Source file: `AWS SAA-C03 Dumps.pdf`
- Extracted range: Use the question range requested by the user.
- Output file format: `aws-saa-c03-practice-test-questions-<start>-<end>.md`
- Example output file: `aws-saa-c03-practice-test-questions-1-50.md`

When the user asks for a range such as questions 51 through 100 or 201 through 250, use that requested range throughout the generated file.

## Output Structure

The Markdown file must contain these sections in this order:

1. Practice test questions
2. Answer key and explanations
3. Quick answer sheet

## Practice Test Section

The top section should include only the requested question range.

Rules:

- Include the question text and all answer options.
- Do not include answers in this section.
- Do not include explanations in this section.
- Keep each question under a heading like `## Question 1`.
- Separate each question with `---`.
- Add an empty line between each answer option.
- Bold answer option labels, for example:

```markdown
**A.** First option text.

**B.** Second option text.
```

## Answer Key And Explanations Section

This section should start with:

```markdown
# Answer Key and Explanations
```

Rules:

- Include one entry for each question in the requested range.
- Keep each entry under a heading like `## Question 1`.
- Include the answer first.
- Include the explanation after the answer.
- Bold the answer label and answer value, for example:

```markdown
**Answer:** **A**
```

- Bold the explanation label:

```markdown
**Explanation:**
```

- Add clear paragraph spacing in explanations.
- Bold option references in explanations, for example:

```markdown
**Option C** is incorrect because...
```

- Bold lettered explanation labels when they appear at the start of a line, for example:

```markdown
**A.** Explanation for option A.
```

## Quick Answer Sheet Section

This section should be the final section and start with:

```markdown
# Quick Answer Sheet
```

Rules:

- Include one line per question.
- Use this exact format:

```markdown
Question 1: A
Question 2: C
```

- Preserve multi-answer values, for example:

```markdown
Question 18: AB
```

## Formatting Requirements

- Use Markdown headings for navigation in VS Code preview.
- Keep options visually separated with blank lines.
- Keep explanations readable with short paragraphs where possible.
- Use bold formatting to make option labels and key answer markers easy to scan.
- Do not rewrite the question content unless fixing obvious formatting issues from PDF extraction.
- Do not mix the answer key into the practice test section.

## Verification Checklist

After generating or editing the Markdown file, verify:

- The practice test contains only the requested question range.
- The answer key contains one answer entry per requested question.
- The quick answer sheet contains one entry per requested question.
- The generated filename matches the requested range.
- No `Answer:` or `Explanation:` content appears in the practice test section.
- Option labels `A.` through `E.` are bolded where present.
- Multi-answer questions keep their full answer values, such as `AB` or `BE`.

Useful checks:

```bash
rg -c '^## Question ' aws-saa-c03-practice-test-questions-<start>-<end>.md
rg -c '^\*\*Answer:\*\*' aws-saa-c03-practice-test-questions-<start>-<end>.md
sed -n '/^# Quick Answer Sheet$/,$p' aws-saa-c03-practice-test-questions-<start>-<end>.md | rg -c '^Question [0-9]+: '
```

Expected counts:

- `## Question`: twice the number of requested questions, because each question appears once in the test section and once in the answer key.
- `**Answer:**`: one entry per requested question.
- Quick answer sheet entries: one entry per requested question.

For example, a 50-question range should have:

- `## Question`: 100 total headings.
- `**Answer:**`: 50 entries.
- Quick answer sheet entries: 50 entries.
