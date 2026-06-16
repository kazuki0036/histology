import { useState } from "react";

const data = {
  female: [
    {
      organ: "子宮頸部",
      en: "Cervix uteri",
      sections: [
        {
          title: "外子宮口・扁平上皮部（外頸部）",
          items: [
            "重層扁平上皮（非角化性）が被覆",
            "基底層 → 傍基底層 → 中間層 → 表層の成熟過程",
            "表層細胞は核濃縮＋糖原を豊富に含む（PAS陽性）",
          ]
        },
        {
          title: "頸管粘膜（内頸部）",
          items: [
            "単層円柱上皮（粘液産生細胞）",
            "粘液は淡明・泡沫状（HE染色で淡染）",
            "腺窩（crypts）：陥入構造、真の腺ではない",
            "間質は線維性結合組織＋少量平滑筋",
          ]
        },
        {
          title: "扁平円柱上皮境界（SCJ）",
          items: [
            "移行帯（transformation zone）：異形成・癌の好発部位",
            "扁平上皮化生（squamous metaplasia）が生理的に生じる",
            "予備細胞（reserve cells）が化生の起源",
          ]
        },
        {
          title: "臨床検査・細胞診のポイント",
          items: [
            "Pap smear：SCJからの採取が必須",
            "コイロサイト（HPV感染）：核周囲空胞＋核異型",
            "CIN（頸部上皮内腫瘍）：基底側から上皮内に異型細胞",
          ]
        },
      ]
    },
    {
      organ: "子宮体部",
      en: "Corpus uteri",
      sections: [
        {
          title: "子宮内膜",
          items: [
            "機能層（stratum functionale）：月経で脱落",
            "基底層（stratum basale）：脱落せず、再生の起源",
            "腺上皮：単層円柱上皮（増殖期＝直管腺、分泌期＝鋸歯状・螺旋腺）",
            "間質：紡錘形細胞、血管（渦巻き動脈）豊富",
          ]
        },
        {
          title: "月経周期による変化",
          items: [
            "増殖期（卵胞期）：腺上皮核分裂増加、間質浮腫",
            "分泌期（黄体期）：核下空胞→核上空胞→腺腔内分泌物蓄積",
            "月経期：フィブリン血栓＋壊死組織＋好中球浸潤",
          ]
        },
        {
          title: "子宮筋層",
          items: [
            "平滑筋束が縦・輪・斜に交錯（3層構造）",
            "筋腫（leiomyoma）：良性、渦巻き状配列、マッソン染色で識別しやすい",
          ]
        },
        {
          title: "臨床検査・細胞診のポイント",
          items: [
            "子宮内膜癌（類内膜癌 type I）：増殖期様の異型腺管が密集",
            "漿液性癌（type II）：乳頭状構造＋強い核異型",
            "内膜細胞診：核肥大・核小体明瞭・細胞質少量",
          ]
        },
      ]
    },
    {
      organ: "卵管",
      en: "Uterine tube (Fallopian tube)",
      sections: [
        {
          title: "壁の構造",
          items: [
            "粘膜：複雑な縦走ひだ（最も発達：膨大部）",
            "上皮：単層円柱上皮（線毛細胞＋分泌細胞＋楔状細胞）",
            "固有筋層：内輪・外縦の平滑筋",
            "漿膜：中皮（単層扁平）",
          ]
        },
        {
          title: "部位別特徴",
          items: [
            "間質部：粘膜ひだ少、管腔最狭",
            "峡部：壁厚、筋層発達",
            "膨大部：粘膜ひだ最も複雑、受精の場",
            "漏斗部（采部）：采（fimbriae）が卵子捕捉",
          ]
        },
        {
          title: "臨床検査のポイント",
          items: [
            "異所性妊娠（子宮外妊娠）：膨大部に最多",
            "卵管炎：粘膜ひだの癒合・消失、好中球浸潤",
          ]
        },
      ]
    },
    {
      organ: "卵巣",
      en: "Ovary",
      sections: [
        {
          title: "皮質",
          items: [
            "表層上皮（胚上皮）：単層立方〜扁平上皮",
            "白膜（tunica albuginea）：線維性結合組織",
            "卵胞の発育段階：原始卵胞→一次卵胞→二次卵胞→グラーフ卵胞",
            "顆粒膜細胞（granulosa cells）：卵胞壁を形成、エストロゲン産生",
            "莢膜細胞（theca cells）：内・外莢膜、アンドロゲン産生（→顆粒膜でE2変換）",
          ]
        },
        {
          title: "黄体・白体",
          items: [
            "黄体（corpus luteum）：排卵後、顆粒膜黄体化細胞＋莢膜黄体化細胞",
            "顆粒膜黄体化細胞：大型、淡明細胞質、プロゲステロン産生",
            "白体（corpus albicans）：黄体退縮後の硝子化瘢痕",
          ]
        },
        {
          title: "髄質",
          items: [
            "血管・リンパ管・神経豊富な疎性結合組織",
            "門細胞（hilus cells）：アンドロゲン産生（Reinke結晶は少量）",
          ]
        },
        {
          title: "臨床検査のポイント",
          items: [
            "嚢胞性腫瘍：漿液性（単純上皮）・粘液性（杯細胞様）の上皮型識別重要",
            "顆粒膜細胞腫：Call-Exner小体（微小卵胞様構造）が特徴",
            "胚細胞腫瘍：未熟奇形腫、ディスゲルミノーマ等",
          ]
        },
      ]
    },
  ],
  male: [
    {
      organ: "精巣",
      en: "Testis",
      sections: [
        {
          title: "精細管（seminiferous tubule）",
          items: [
            "精子形成上皮：精祖細胞→精母細胞→精子細胞→精子",
            "セルトリ細胞（Sertoli cells）：精細管内腔まで達する、血液精巣関門（BTB）形成",
            "BTB：セルトリ細胞間tight junction、減数分裂細胞を免疫から隔離",
            "精子完成（spermiation）：精子頭部の核濃縮・先体形成・鞭毛形成",
          ]
        },
        {
          title: "間質（ライディッヒ細胞）",
          items: [
            "ライディッヒ細胞（Leydig cells）：精細管間に散在、多角形・好酸性",
            "テストステロン産生（LH刺激）",
            "Reinke結晶：棒状ないし六角形の細胞内結晶（電顕レベル、光顕では稀）",
          ]
        },
        {
          title: "精巣上体・精管",
          items: [
            "精巣上体上皮：偽重層円柱上皮＋静線毛（stereocilia）",
            "精管：三層の平滑筋（内縦・中輪・外縦）、強い蠕動で精子輸送",
          ]
        },
        {
          title: "臨床検査のポイント",
          items: [
            "精巣腫瘍：胚細胞腫瘍が95%（セミノーマ・非セミノーマ）",
            "セミノーマ：大型均一な細胞＋リンパ球浸潤",
            "不妊：精液検査、精子形成能評価に組織所見が重要",
          ]
        },
      ]
    },
    {
      organ: "前立腺",
      en: "Prostate",
      sections: [
        {
          title: "腺構造",
          items: [
            "複合管状胞状腺：単層〜偽重層円柱上皮（分泌細胞）＋基底細胞",
            "基底細胞：小型扁平、CK5/6陽性、幹細胞的役割",
            "前立腺小体（corpora amylacea）：同心円状石灰化物、加齢で増加",
            "間質：線維筋性間質（平滑筋＋膠原線維）が豊富",
          ]
        },
        {
          title: "区域（zone）別",
          items: [
            "移行域（TZ）：BPH（良性前立腺過形成）の好発部位",
            "辺縁域（PZ）：腺癌の好発部位（約70%）",
            "中心域（CZ）：射精管周囲、癌は少ない",
          ]
        },
        {
          title: "臨床検査のポイント",
          items: [
            "PSA（前立腺特異抗原）：腺上皮細胞が産生、血清マーカー",
            "前立腺癌：腺管構造の異型・浸潤、Gleason grading（腺管パターンで5段階）",
            "BPH：移行域の腺管＋平滑筋の過形成、基底細胞保持",
            "PIN（前立腺上皮内腫瘍）：基底細胞層残存＋核異型",
          ]
        },
      ]
    },
  ]
};

const colors = {
  female: { bg: "#fdf2f8", accent: "#c026d3", light: "#fae8ff", border: "#e879f9", text: "#701a75" },
  male: { bg: "#eff6ff", accent: "#2563eb", light: "#dbeafe", border: "#60a5fa", text: "#1e3a8a" },
};

export default function App() {
  const [activeTab, setActiveTab] = useState("female");
  const [openOrgans, setOpenOrgans] = useState({});
  const [openSections, setOpenSections] = useState({});

  const toggleOrgan = (key) =>
    setOpenOrgans((p) => ({ ...p, [key]: !p[key] }));
  const toggleSection = (key) =>
    setOpenSections((p) => ({ ...p, [key]: !p[key] }));

  const c = colors[activeTab];
  const items = activeTab === "female" ? data.female : data.male;

  return (
    <div style={{ fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif", minHeight: "100vh", background: "#f8fafc", padding: "24px 16px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#94a3b8", textTransform: "uppercase", marginBottom: 6 }}>
            Histology Reference — Reproductive System
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>
            生殖器組織学まとめ
          </h1>
          <p style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>
            組織学実習・臨床検査技師国家試験対応
          </p>
        </div>

        {/* Tab */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {["female", "male"].map((tab) => {
            const tc = colors[tab];
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenOrgans({}); setOpenSections({}); }}
                style={{
                  flex: 1, padding: "10px 0", borderRadius: 10, border: active ? `2px solid ${tc.accent}` : "2px solid #e2e8f0",
                  background: active ? tc.light : "#fff", color: active ? tc.text : "#64748b",
                  fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all .15s"
                }}
              >
                {tab === "female" ? "♀ 女性生殖器" : "♂ 男性生殖器"}
              </button>
            );
          })}
        </div>

        {/* Organs */}
        {items.map((organ, oi) => {
          const organKey = `${activeTab}-${oi}`;
          const isOpen = !!openOrgans[organKey];
          return (
            <div key={organKey} style={{ marginBottom: 12, borderRadius: 14, border: `1.5px solid ${isOpen ? c.border : "#e2e8f0"}`, overflow: "hidden", background: "#fff", boxShadow: isOpen ? `0 4px 16px ${c.accent}22` : "0 1px 4px #00000008" }}>
              {/* Organ header */}
              <button
                onClick={() => toggleOrgan(organKey)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 18px", background: isOpen ? c.light : "#fff",
                  border: "none", cursor: "pointer", textAlign: "left"
                }}
              >
                <div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: c.text }}>{organ.organ}</span>
                  <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 8, fontStyle: "italic" }}>{organ.en}</span>
                </div>
                <span style={{ fontSize: 18, color: c.accent, fontWeight: 700, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▾</span>
              </button>

              {isOpen && (
                <div style={{ padding: "0 12px 12px" }}>
                  {organ.sections.map((sec, si) => {
                    const secKey = `${organKey}-${si}`;
                    const secOpen = !!openSections[secKey];
                    return (
                      <div key={secKey} style={{ marginTop: 8, borderRadius: 10, border: `1px solid ${secOpen ? c.border : "#f1f5f9"}`, overflow: "hidden" }}>
                        <button
                          onClick={() => toggleSection(secKey)}
                          style={{
                            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "10px 14px", background: secOpen ? `${c.accent}12` : "#f8fafc",
                            border: "none", cursor: "pointer", textAlign: "left"
                          }}
                        >
                          <span style={{ fontSize: 13, fontWeight: 700, color: secOpen ? c.text : "#334155" }}>{sec.title}</span>
                          <span style={{ fontSize: 14, color: c.accent, transform: secOpen ? "rotate(90deg)" : "none", transition: "transform .2s" }}>▶</span>
                        </button>
                        {secOpen && (
                          <ul style={{ margin: 0, padding: "10px 14px 10px 28px", listStyle: "none" }}>
                            {sec.items.map((item, ii) => (
                              <li key={ii} style={{ position: "relative", fontSize: 13, color: "#1e293b", lineHeight: 1.7, paddingLeft: 12, marginBottom: 4 }}>
                                <span style={{ position: "absolute", left: 0, top: 6, width: 5, height: 5, borderRadius: "50%", background: c.accent, display: "inline-block" }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ textAlign: "center", fontSize: 11, color: "#cbd5e1", marginTop: 20 }}>
          臨床検査学科 組織学実習資料
        </div>
      </div>
    </div>
  );
}
