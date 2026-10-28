# FreshCheck Pricing and Cost Laboratory

Mission 3: a standalone, browser-only financial planning laboratory for the FreshCheck smart-lid concept. The original venture website and Mission 2 dashboard are unchanged.

## Run and deploy

Node.js 20 or later: `node --test tests.mjs`, `node build.mjs`, `node server.mjs`. Local preview: http://127.0.0.1:4174/Cost-Lab-Mission-3/. No dependency installation is needed: the browser-compatible `docx` 9.6.1 distribution is bundled under `vendor/` with its license. The application uses native ES modules, SVG charts, CSS and browser storage. Google Fonts is optional; system font fallbacks work without it. All calculations, research and report generation work without a server, paid API or login.

The GitHub Actions workflow tests and builds the static site, then deploys `dist/`. Configure repository Settings → Pages → Source: GitHub Actions. Relative asset paths and hash navigation support the repository subpath and refreshing any section.

Repository: https://github.com/ryanzannoni-creator/Cost-Lab-Mission-3

Laboratory: https://ryanzannoni-creator.github.io/Cost-Lab-Mission-3/

Original venture repository: https://github.com/ryanzannoni-creator/Creative-Website-2.git

Original venture live URL: https://ryanzannoni-creator.github.io/Creative-Website-2/

The original live URL was resolved from the GitHub Pages API for the user-supplied repository. It was not explicitly supplied as a second URL. This provenance is retained in the model and report.

## Data and evidence

- `data/competitors.json`: unchanged Mission 1 JSON, cross-checked against the workbook/report in Mission 2. Three competitors, six offers, five single-container listings and three representative benchmarks. Prices are October 27, 2026 snapshots. The three-container set is separate; optional pump costs are not included. Advertised compare-at is not confirmed historical regular pricing.
- `data/defaults.json`: 34 venture-specific expense suggestions and one proposed starter bundle. U.S. direct-to-consumer, founder-led, home-based operation is an explicit assumption. No documented subscription product exists, so only bundled, one-time and per-unit purchasing are enabled.
- `data/sources.json`: five official sources checked October 27, 2026: Stripe card fees, Supabase Pro, optional Shopify Basic, Adafruit SGP40 prototype board and BLS compensation context. A sourced price is not an industry average. Production BOM, development hours, shipment costs and validation budgets are estimates or illustrative allowances, not supplier quotes. The prototype sensor is for indoor air-quality development, not validated food-safety sensing.

Researched identifies a published reference; Estimated identifies a reasoned assumption; Illustrative identifies an unverified teaching allowance; Student-Entered identifies edits. Original reference amount, frequency and evidence remain visible after edits. Benchmarks can differ from selected amounts or classification. Fee rates assume domestic cards and one billable unit per transaction.

## Financial rules

The horizon is a 12-month steady operating year. Monthly/quarterly/annual fixed costs multiply by 12/4/1. Variable dollars apply per billable unit; percentage costs apply to sales revenue. Price changes recalculate percentage fees. Additional product-level unit cost is explicitly additive to assigned expense rows.

Startup cash is summed separately. Cash-only startup outlays and inventory buffer do not enter annual operating expense. Explicit capital treatment contributes straight-line depreciation over the chosen positive life, zero residual and a full year in service. This is a planning convention, not tax accounting. Startup cash requirements do not represent a complete cash-flow forecast.

Unit contribution = selling price minus variable cost. Annual operating profit = total revenue minus variable expense minus recurring fixed expense minus depreciation. Single-product break-even = fixed costs / positive unit contribution. Business break-even uses the quantity-weighted contribution of the entered sales mix. Break-even units round upward; break-even revenue uses the unrounded intersection. Zero quantities mean no established sales mix; nonpositive contribution means no finite break-even. Mixed-product units are planning equivalents; exact whole-unit mix feasibility and capacity are not guaranteed.

Shared fixed costs allocate by revenue, quantity or equal shares, with equal fallback at zero relevant denominator. Product-specific fixed costs stay with that product. Allocations affect product reporting, never combined costs. Business-wide variable costs apply across applicable units or revenue once. Removing a product disables its assigned expenses and makes them business-wide for later review; it does not silently move them into totals.

Lean and Expansion modify selected overhead allowances, not assumed demand. Each operating scenario preserves its own edits. Sales-volume scenarios scale current product quantities, rounding to whole units. Sensitivity holds quantities fixed and is not a real-world demand prediction.

## Decision review and exports

Risk rules are transparent in the interface and model. Nonpositive weighted contribution is financially unsustainable under the constant-cost assumptions. Losses, nonpositive product contributions, missing essential costs, or uncosted products trigger High. Stress losses, a margin of safety below 20% and evidence uncertainty trigger Moderate. Lower requires no triggers; FreshCheck's concept-stage evidence gaps keep it at least Moderate. These are teaching rules, not probabilities.

Input changes invalidate a prior review and confirmed export. Confirmation requires a current review, a justification of at least 30 characters and explicit acknowledgment for major warnings. A risky price is not prohibited. Only the student confirms a real decision.

Both report formats originate from one immutable snapshot. The Word report has all ten requested sections, cost and results tables, sources and confirmation metadata. JSON separates `customerFacing` from `privatePlanning`. Never publish the privatePlanning object or the Word report as customer-facing website content. Add-ons are descriptive; separately priced add-ons should be modeled as separate products with costs and quantities.

Working configurations export/import as JSON. Import validates types, IDs, amounts, references and periods, and requires new evaluation/confirmation. Storage is browser-local and may be lost; export backups for transfer. No inputs are uploaded by the application.

## Testing

Run `node --test tests.mjs`. See TESTING.md for actual browser and document verification. `?qa=1` selects a separate storage namespace with a conspicuous TEST WORKSPACE banner and marks confirmed snapshots `testOnly: true`. This exists for isolated end-to-end tests and must not be mistaken for a student decision. Test artifacts are ignored and excluded from builds.

## Limits and updates

This is not a demand forecast, cash-flow schedule, tax model, investment recommendation or technical certification. Capacity limits, sales mix stability, working-capital timing, actual return rates, sensor reliability and willingness to pay remain unverified. FreshCheck does not yet have a validated manufacturing design. Default prices do not imply profitability; the starting scenario intentionally reports the cost consequences without hiding losses.

To update research, edit the data files and revise any sample-specific explanatory prose and tests. Recheck all references and vendor prices. The browser `docx` bundle is pinned; review its license and rerun document QA when changing versions. No Mission 4 website changes are performed here.
