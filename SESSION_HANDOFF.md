# Session Handoff

## Current Status

As of 2026-05-17, the repository contains planning and documentation for an MIT App Inventor medicine image classification helper app and a document-based App Inventor development automation helper app.

Current working branch:

```text
codex/add-automation-helper-mvp
```

Branch base:

```text
main at 14ba233
```

## Repository

GitHub repository:

```text
https://github.com/elecage/aiPharmacy
```

Primary branch:

```text
main
```

## Documents Completed

| No. | File | Purpose |
|---:|---|---|
| 1 | `drug_ai_appinventor_plan_01.md` | Overall App Inventor AI pharmacy app plan |
| 2 | `drug_ai_training_guide_02.md` | AI training procedure |
| 3 | `drug_ai_appinventor_blocks_03.md` | Korean screen and block design |
| 4 | `drug_ai_iphone_companion_04.md` | iPhone Companion constraints and alternatives |
| 5 | `drug_ai_development_checklist_05.md` | Development and testing checklist |
| 6 | `drug_ai_training_results_06.md` | Teachable Machine training result template |
| 7 | `drug_ai_appinventor_implementation_07.md` | Actual App Inventor implementation record |
| 8 | `drug_ai_webapi_design_08.md` | Web API fallback design |
| 9 | `drug_ai_presentation_report_outline_09.md` | Presentation and final report outline |
| 10 | `drug_ai_automation_app_plan_10.md` | Automation helper app development plan |
| 11 | `drug_ai_automation_helper_ui_design_11.md` | Automation helper app UI and data design |

## Image Assets

Current SVG diagrams are stored in:

```text
images/
```

Notable diagrams:

- `app_screen_wireframe_01.svg`
- `appinventor_block_flow_01.svg`
- `iphone_alternative_architecture_01.svg`
- `development_checklist_flow_01.svg`
- `training_results_record_flow_01.svg`
- `appinventor_implementation_record_flow_01.svg`
- `webapi_architecture_flow_01.svg`
- `presentation_report_flow_01.svg`
- `automation_helper_app_flow_01.svg`
- `automation_helper_ui_layout_01.svg`

## Latest User Direction

The user wants to build an app that automates or assists App Inventor development based on the existing documents.

The agreed direction is:

```text
Start with a document-based App Inventor development automation helper app.
Do not start with full .aia generation.
```

## Next Recommended Task

Recommended next work:

```text
Review and merge the React/Vite automation helper MVP, then continue with richer data extraction or checklist persistence.
```

Suggested implementation path:

```text
1. Create a web app scaffold.
2. Add static project data from documents 1-11.
3. Add a document list.
4. Add dashboard cards for the development stages.
5. Add component/block/checklist views.
```

Latest completed work:

```text
Created automation-helper React/Vite MVP with document list, development stage dashboard, detail panel, component list, block guide, checklist view, and fixed safety notice.
```

## Important Constraints

- Keep Korean as the main language for project documents.
- Preserve the medical safety stance.
- Do not imply the AI app can make reliable medical decisions.
- iPhone Companion AI extension support must remain a risk until tested.
- Web API fallback must mention privacy and HTTPS.

## Git Handoff

When continuing:

```text
git status --short --branch
git pull --ff-only
```

Before publishing:

```text
git switch -c codex/<short-task-name>
git add <intended-files>
git commit -m "<concise message>"
git push -u origin codex/<short-task-name>
gh pr create ...
gh pr merge ...
```

## Open Questions

- Should the automation helper app be a local static web app or a full app with file editing?
- Should Markdown parsing happen live from files, or should the first version use a curated JSON data file? Current document 11 recommends curated static data for the first version.
- Should `.aia` generation be researched immediately after the helper app MVP, or postponed until the guide app proves useful?
