# Mission 3 verification record

## Automated mathematical checks

15 test groups pass: data and research structure; independently calculated single-product totals; percentage and transaction fees; period normalization; startup cash and depreciation; zero/negative margins; break-even rounding; multiple-product allocation; zero quantity; disabled expenses and cost scope; operating and volume scenarios; competitor eligibility and equality; risk/stress findings; confirmation guards and immutable snapshots; malformed backup rejection. Report module import also verifies syntax.

Independent reference: price $25, unit cost $10, annual volume 1,000 and fixed expense $1,200 gives $25,000 revenue, $10,000 variable costs, $13,800 profit, 80 break-even units, $2,000 break-even revenue and 92% margin of safety.

## Actual browser tests

An isolated `?qa=1` workspace was used; no real student decision was confirmed.

- All 34 costs load. Slider changed container cost to $6 and annual total to $7,200; numeric editing and original-value restoration worked.
- Disabled/re-enabled cloud expense updated inclusion. Custom expense creation raised count to 35; deletion returned it to 34.
- Product price/quantity edits, second-product creation, shared allocation, product removal and persistence after reload worked.
- Lean/Typical switching preserved edited scenario inputs; custom scenario save and volume-slider changes worked.
- Review generation showed current product prices and calculated risk. Test justification and major-warning acknowledgment produced a test-only confirmed snapshot.
- DOCX and JSON were downloaded through the actual browser. Both share the exact same snapshot ID and statement. DOCX is a valid OOXML ZIP containing document/styles/content types; all ten requested sections are present. Customer-facing JSON contains no expense model.
- Changing inputs marked the review outdated and disabled confirmation/report downloads; re-evaluation restored eligibility.
- Working JSON backup was downloaded and imported. Restoration required fresh evaluation and confirmation.
- Break-even chart range control rendered the expected intersection. Desktop 1440×1000 and mobile 390×844 layouts were inspected; document scroll width equaled viewport width at both sizes.

## Word report visual QA

The actual browser-produced report was rendered with the bundled LibreOffice renderer. Table formatting was refined and the same report generator was re-rendered. All nine final pages were visually inspected: readable tables with repeated headers, preserved line breaks, no clipped text or overlapping content. Test outputs are not included in the public build.

## Limitations

Supplier availability and all historical retailer pages were not re-researched; Mission 1 pricing remains a dated snapshot. The final user report can vary in length with custom expenses, products and written explanations. Actual manufacturing feasibility, quotes, capacity and demand remain unvalidated.
