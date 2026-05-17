# AGENTS.md

## Project Overview

This repository documents and plans an MIT App Inventor project for a Korean-language medicine image classification helper app. The project is educational and should never be described as a medical decision tool.

The current next product direction is to build an "App Inventor development automation helper app" that uses the existing Markdown documents to guide a user through App Inventor screen design, block implementation, AI training records, iPhone Companion constraints, Web API fallback design, testing, and presentation preparation.

## Important Safety Position

Always preserve this safety stance:

```text
AI analysis results are for reference only.
Users must confirm with a pharmacist or doctor before taking medicine.
```

Do not write copy that implies the app can identify medicine with medical reliability or decide whether a user should take medicine.

## Repository Contents

Core documents:

- `drug_ai_appinventor_plan_01.md`: overall project plan
- `drug_ai_training_guide_02.md`: AI training procedure
- `drug_ai_appinventor_blocks_03.md`: Korean App Inventor screen and block design
- `drug_ai_iphone_companion_04.md`: iPhone Companion constraints and alternatives
- `drug_ai_development_checklist_05.md`: actual development and test checklist
- `drug_ai_training_results_06.md`: Teachable Machine training result template
- `drug_ai_appinventor_implementation_07.md`: actual App Inventor implementation record template
- `drug_ai_webapi_design_08.md`: Web API fallback design
- `drug_ai_presentation_report_outline_09.md`: presentation and final report outline
- `drug_ai_automation_app_plan_10.md`: automation helper app plan

Image assets are stored in `images/` as SVG diagrams.

## Work Style

- Keep Korean as the primary language for user-facing documents.
- Use clear Markdown headings, tables, and checklists.
- Use relative Markdown image links such as `images/example.svg`.
- Keep documents numbered in order when adding new major docs.
- Add diagrams as SVG files in `images/` when they help the document stand alone.
- Do not remove or rewrite earlier documents unless the user explicitly asks.

## Development Guidance For The Automation Helper App

Recommended first implementation:

```text
Document-based App Inventor development helper web app
```

Prefer a simple web app first, likely React + Vite, before attempting App Inventor `.aia` generation.

First-version features should include:

- Markdown document list
- Development stage dashboard
- App Inventor component list view
- Block implementation guide view
- AI training checklist view
- Android/iPhone/Web API test checklist view
- Web API specification view
- Presentation/report outline view

Avoid starting with:

- Full `.aia` generation
- Automated App Inventor browser clicking
- Teachable Machine training automation
- Medical database integration

## Git Workflow

The repository uses `main` as the primary branch.

For new work:

1. Create a branch using `codex/` prefix.
2. Stage only intended files.
3. Commit with a concise English message.
4. Push the branch.
5. Open a PR.
6. Merge after confirming the diff.

Past PRs have used this style:

- `Add Web API design document`
- `Add presentation report outline`
- `Add App Inventor implementation record`

## Handoff Expectations

Before ending a session, update `SESSION_HANDOFF.md` if the state changed meaningfully.

Include:

- Current branch and sync status
- New files added
- PRs merged
- Next recommended task
- Any open questions or known risks

## Known Risks

- iPhone Companion may not support Android-oriented App Inventor extensions.
- AI extension behavior should not be assumed without current testing.
- Web API fallback requires privacy and security care because images may contain personal information.
- App Inventor `.aia` generation is possible in theory but should be treated as a later research task.
