import React, { useMemo, useState } from 'react';
import {
  blocks,
  checklists,
  components,
  documents,
  safetyMessage,
  stages,
} from './data/projectData.js';

function App() {
  const [selectedStageId, setSelectedStageId] = useState(stages[0].id);
  const selectedStage = stages.find((stage) => stage.id === selectedStageId) ?? stages[0];

  const relatedDocuments = useMemo(
    () => documents.filter((doc) => selectedStage.documents.includes(doc.number)),
    [selectedStage],
  );

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">MIT App Inventor 개발 안내</p>
          <h1>앱인벤터 개발 자동화 도우미</h1>
        </div>
        <div className="safety-pill">{safetyMessage}</div>
      </header>

      <section className="hero-strip" aria-label="도우미 앱 구조">
        <div>
          <h2>문서를 개발 화면으로 바꾸는 첫 MVP</h2>
          <p>
            저장소의 1-11번 문서를 기준으로 개발 단계, 컴포넌트, 블록, 테스트 항목을
            한 화면에서 따라갈 수 있게 정리한다.
          </p>
        </div>
        <img src="/images/automation_helper_ui_layout_01.svg" alt="도우미 앱 UI 레이아웃" />
      </section>

      <section className="workspace" aria-label="개발 도우미 작업 화면">
        <aside className="document-panel">
          <div className="section-heading">
            <p className="eyebrow">Documents</p>
            <h2>문서 목록</h2>
          </div>
          <div className="document-list">
            {documents.map((doc) => (
              <article className="document-item" key={doc.file}>
                <div className="doc-number">{doc.number}</div>
                <div>
                  <h3>{doc.title}</h3>
                  <p>{doc.summary}</p>
                  <span>{doc.file}</span>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <section className="stage-panel">
          <div className="section-heading">
            <p className="eyebrow">Stages</p>
            <h2>개발 단계 대시보드</h2>
          </div>
          <div className="stage-grid">
            {stages.map((stage) => (
              <button
                className={`stage-card ${stage.id === selectedStage.id ? 'active' : ''}`}
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                type="button"
              >
                <span>{stage.status}</span>
                <strong>{stage.title}</strong>
                <p>{stage.description}</p>
              </button>
            ))}
          </div>
        </section>

        <aside className="detail-panel">
          <div className="section-heading">
            <p className="eyebrow">Guide</p>
            <h2>{selectedStage.title}</h2>
          </div>
          <p className="detail-summary">{selectedStage.description}</p>

          <div className="detail-block">
            <h3>이번 단계 작업</h3>
            <ul>
              {selectedStage.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block">
            <h3>연결 문서</h3>
            <div className="related-docs">
              {relatedDocuments.map((doc) => (
                <span key={doc.file}>
                  {doc.number} {doc.title}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="reference-section">
        <div className="reference-table">
          <div className="section-heading">
            <p className="eyebrow">Components</p>
            <h2>앱인벤터 컴포넌트</h2>
          </div>
          <div className="table-list">
            {components.map((component) => (
              <div className="table-row" key={`${component.type}-${component.name}`}>
                <strong>{component.name}</strong>
                <span>{component.type}</span>
                <p>{component.role}</p>
                <em>{component.visible ? '화면 표시' : '비가시'}</em>
              </div>
            ))}
          </div>
        </div>

        <div className="reference-table">
          <div className="section-heading">
            <p className="eyebrow">Blocks</p>
            <h2>블록 구현 순서</h2>
          </div>
          <div className="ordered-list">
            {blocks.map(([name, description], index) => (
              <div className="ordered-row" key={name}>
                <span>{index + 1}</span>
                <div>
                  <strong>{name}</strong>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reference-table full-width">
          <div className="section-heading">
            <p className="eyebrow">Checklist</p>
            <h2>테스트와 발표 체크리스트</h2>
          </div>
          <div className="checklist-grid">
            {checklists.map((check) => (
              <label className="check-item" key={`${check.group}-${check.item}`}>
                <input type="checkbox" />
                <span>{check.group}</span>
                <p>{check.item}</p>
              </label>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
