export const template_html = `

<!DOCTYPE html>
<html>
    <head>
        <title>CT AbdPel - Appendicitis</title>
        <meta charset="UTF-8" />
        <meta name="dcterms.identifier" content="8fe0f520-de90-4a4d-bb60-efa74b2ed261" />
        <meta name="dcterms.title" content="CT AbdPel - Appendicitis" />
        <meta name="dcterms.description" content="Generic Abdomen Pelvis CT w contrast template incorporating appendicitis CDE" />
        <meta name="dcterms.type" content="IMAGE_REPORT_TEMPLATE" />
        <meta name="dcterms.language" content="en" />
        <meta name="dcterms.publisher" content="" />
        <meta name="dcterms.rights" content="May be used freely, subject to license agreement" />
        <meta name="dcterms.license" content="http://www.radreport.org/license.pdf" />
        <meta name="dcterms.date" content="2019-07-10" />
        <meta name="dcterms.creator" content="Marta E. Heilbrun, MD" />
        <script type="text/xml">
            <template_attributes>
                <coded_content>
                    <coding_schemes>
                        <coding_scheme name="RADLEX" designator="2.16.840.1.113883.6.256"></coding_scheme>
                        <coding_scheme name="LOINC" designator="2.16.840.1.113883.6.1"></coding_scheme>
                    </coding_schemes>
                    <entry origtxt="RADIO_1562002262861_0">
                        <term>
                            <code meaning="present" value="http://radlex.org/RID/RID28472" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="RADIO_1562002262861_1">
                        <term>
                            <code meaning="unknown" value="http://radlex.org/RID/RID5655" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SECTION_HEADER_1562605486916">
                        <term>
                            <code meaning="intestine" value="http://radlex.org/RID/RID130" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="findings">
                        <term>
                            <code meaning="Procedure Findings" value="59776-5" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1459555208450">
                        <term>
                            <code meaning="pancreas" value="RID170" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1459555208452">
                        <term>
                            <code meaning="pelvic lymph node group" value="RID28855" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1459555208451">
                        <term>
                            <code meaning="adrenal region" value="RID28722" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442185">
                        <term>
                            <code meaning="gallbladder" value="RID187" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442185_0">
                        <term>
                            <code meaning="normal" value="RID13173" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442185_1">
                        <term>
                            <code meaning="postoperative" value="http://radlex.org/RID/RID5729" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442185_2">
                        <term>
                            <code meaning="gallstone in gallbladder" value="http://radlex.org/RID/RID4990" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208488">
                        <term>
                            <code meaning="left kidney" value="RID29663" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208488_0">
                        <term>
                            <code meaning="none" value="RID28454" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1562002262896">
                        <term>
                            <code meaning="liver" value="http://radlex.org/RID/RID58" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="CHECKBOX_1562002262835">
                        <term>
                            <code meaning="imaging with contrast" value="http://radlex.org/RID/RID39045" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="CHECKBOX_1562002262835_0">
                        <term>
                            <code meaning="intravenous contrast" value="http://radlex.org/RID/RID49553" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208461">
                        <term>
                            <code meaning="right kidney" value="RID29662" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1562002262855">
                        <term>
                            <code meaning="kidney" value="http://radlex.org/RID/RID205" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="TEXT_1459554442189">
                        <term>
                            <code meaning="spleen" value="RID86" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208478">
                        <term>
                            <code meaning="hydronephrosis" value="RID34393" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208478_0">
                        <term>
                            <code meaning="none" value="RID28454" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208478_1">
                        <term>
                            <code meaning="mild" value="RID5671" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208478_2">
                        <term>
                            <code meaning="moderate" value="RID5672" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208478_3">
                        <term>
                            <code meaning="severe" value="RID5673" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="procedureInformation">
                        <term>
                            <code meaning="Current Imaging Procedure Description" value="55111-9" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442176">
                        <term>
                            <code meaning="lung" value="RID1301" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442176_0">
                        <term>
                            <code meaning="normal" value="RID13173" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459554442176_1">
                        <term>
                            <code meaning="report" value="RID28487" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208497">
                        <term>
                            <code meaning="hydronephrosis" value="RID34393" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208497_0">
                        <term>
                            <code meaning="none" value="RID28454" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208497_1">
                        <term>
                            <code meaning="mild" value="RID5671" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208497_2">
                        <term>
                            <code meaning="moderate" value="RID5672" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208497_3">
                        <term>
                            <code meaning="severe" value="RID5673" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="comparisonsText">
                        <term>
                            <code meaning="comparison report" value="http://radlex.org/RID/RID13168" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="comparisons">
                        <term>
                            <code meaning="Radiology Comparison Study" value="18834-2" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="impression">
                        <term>
                            <code meaning="Impressions" value="19005-8" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208494">
                        <term>
                            <code meaning="left ureter" value="RID30845" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208494_0">
                        <term>
                            <code meaning="none" value="RID28454" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208494_1">
                        <term>
                            <code meaning="present" value="RID28472" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="clinicalInformation">
                        <term>
                            <code meaning="Clinical Information" value="55752-0" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208471">
                        <term>
                            <code meaning="right ureter" value="RID30844" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208471_0">
                        <term>
                            <code meaning="none" value="RID28454" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1459555208471_1">
                        <term>
                            <code meaning="present" value="RID28472" scheme="RADLEX"></code>
                        </term>
                    </entry>
                    <entry origtxt="SELECTION_LIST_1476917486402">
                        <term>
                            <code meaning="indication" value="RID49442" scheme="RADLEX"></code>
                        </term>
                    </entry>
                </coded_content>
            </template_attributes>
        </script>
    </head>
    <body>
        <section id="procedureInformation" class="level1" data-section-name="Procedure Information">
            <header class="level1">
                Procedure Information
            </header>
            <p title="">
                <label for="CHECKBOX_1562002262835">Technique:</label>
                <span id="CHECKBOX_1562002262835" name="" data-field-type="CHECKBOX" data-field-completion-action="PROHIBIT" value="">
                    <br />
                    <input id="CHECKBOX_1562002262835_0" type="checkbox" name="CHECKBOX_1562002262835" value="CT of the abdomen and pelvis was obtained with intravenous contrast." checked="">CT of the abdomen and pelvis was obtained with intravenous contrast.</input>
                    <br />
                    <input id="CHECKBOX_1562002262835_1" type="checkbox" name="CHECKBOX_1562002262835" value="CT of the abdomen and pelvis was obtained with intravenous and oral contrast.">CT of the abdomen and pelvis was obtained with intravenous and oral contrast.</input>
                    <br />
                    <span>
                        <input id="CHECKBOX_1562002262835_2" type="checkbox" name="CHECKBOX_1562002262835" value="CT of the abdomen and pelvis was obtained with intravenous contrast and" />
                        <input id="CHECKBOX_1562002262835_2_FreeText" type="text" value="CT of the abdomen and pelvis was obtained with intravenous contrast and" />
                    </span>
                </span>
            </p>
        </section>
        <section id="clinicalInformation" class="level1" data-section-name="Clinical Information">
            <header class="level1">
                Clinical Information
            </header>
            <p title="">
                <label for="SELECTION_LIST_1476917486402">Indication:</label>
                <input list="SELECTION_LIST_1476917486402_LIST" id="SELECTION_LIST_1476917486402" name="" data-field-type="SELECTION_LIST" data-field-completion-action="NONE" value="Right lower quadrant pain." />
                <datalist id="SELECTION_LIST_1476917486402_LIST">
                    <option id="SELECTION_LIST_1476917486402_0" value="Abdominal pain." name="SELECTION_LIST_1476917486402">Abdominal pain.</option>
                    <option id="SELECTION_LIST_1476917486402_1" value="Right lower quadrant pain." name="SELECTION_LIST_1476917486402" selected="">Right lower quadrant pain.</option>
                    <option id="SELECTION_LIST_1476917486402_2" value="Pelvic pain." name="SELECTION_LIST_1476917486402">Pelvic pain.</option>
                    <option id="SELECTION_LIST_1476917486402_3" value="" name="SELECTION_LIST_1476917486402"></option>
                </datalist>
            </p>
        </section>
        <section id="comparisons" class="level1" data-section-name="Comparison">
            <header class="level1">
                Comparison
            </header>
            <p title="">
                <label for="comparisonsText"></label>
                <input type="text" id="comparisonsText" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="None." />
            </p>
        </section>
        <section id="findings" class="level1" data-section-name="Findings">
            <header class="level1">
                Findings
            </header>
            <p title="">
                <label for="SELECTION_LIST_1459554442176">Lung Bases:</label>
                <select id="SELECTION_LIST_1459554442176" name="" data-field-type="SELECTION_LIST" data-field-completion-action="NONE" value="Normal.">
                    <option id="SELECTION_LIST_1459554442176_0" value="Normal." name="SELECTION_LIST_1459554442176" selected="">Normal.</option>
                    <option id="SELECTION_LIST_1459554442176_1" value="For findings in the chest please see separately dictated report." name="SELECTION_LIST_1459554442176">For findings in the chest please see separately dictated report.</option>
                </select>
            </p>
            <p title="">
                <label for="TEXT_1562002262896">Liver:</label>
                <input type="text" id="TEXT_1562002262896" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="SELECTION_LIST_1459554442185">Gallbladder:</label>
                <input list="SELECTION_LIST_1459554442185_LIST" id="SELECTION_LIST_1459554442185" name="" data-field-type="SELECTION_LIST" data-field-completion-action="NONE" value="Normal." />
                <datalist id="SELECTION_LIST_1459554442185_LIST">
                    <option id="SELECTION_LIST_1459554442185_0" value="Normal." name="SELECTION_LIST_1459554442185" selected="">Normal.</option>
                    <option id="SELECTION_LIST_1459554442185_1" value="Surgically absent." name="SELECTION_LIST_1459554442185">Surgically absent.</option>
                    <option id="SELECTION_LIST_1459554442185_2" value="Cholelithiasis without cholecystitis." name="SELECTION_LIST_1459554442185">Cholelithiasis without cholecystitis.</option>
                </datalist>
            </p>
            <p title="">
                <label for="TEXT_1459554442189">Spleen:</label>
                <input type="text" id="TEXT_1459554442189" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1459555208450">Pancreas:</label>
                <input type="text" id="TEXT_1459555208450" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1459555208451">Adrenals:</label>
                <input type="text" id="TEXT_1459555208451" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1562002262855">Kidneys/Ureters:</label>
                <input type="text" id="TEXT_1562002262855" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="Normal." />
            </p>
            <section id="SECTION_HEADER_1562605486916" class="level2" data-section-name="Appendix:">
                <header class="level2">
                    Appendix:
                </header>
                <p title="https://www.radelement.org/element/RDE196">
                    <label for="TEXT_1562002262867">Appendiceal Diameter</label>
                    <input type="text" id="TEXT_1562002262867" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE196" />
                </p>
                <p title="https://www.radelement.org/element/RDE197">
                    <label for="TEXT_1562002262873">Peri-Appendiceal Fat Stranding</label>
                    <input type="text" id="TEXT_1562002262873" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE197" />
                </p>
                <p title="https://www.radelement.org/element/RDE198">
                    <label for="TEXT_1562002262874">Free Fluid</label>
                    <input type="text" id="TEXT_1562002262874" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE198" />
                </p>
                <p title="https://www.radelement.org/element/RDE199">
                    <label for="TEXT_1562002262875">Obstructing Focus</label>
                    <input type="text" id="TEXT_1562002262875" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE199" />
                </p>
                <p title="https://www.radelement.org/element/RDE200">
                    <label for="TEXT_1562002262876">Lumen Contents</label>
                    <input type="text" id="TEXT_1562002262876" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE200" />
                </p>
                <p title="https://www.radelement.org/element/RDE201">
                    <label for="TEXT_1562002262877">Peri-Appendiceal Abscess</label>
                    <input type="text" id="TEXT_1562002262877" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE201" />
                </p>
                <p title="https://www.radelement.org/element/RDE202">
                    <label for="TEXT_1562002262878">Opacification</label>
                    <input type="text" id="TEXT_1562002262878" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="RDE202" />
                </p>
            </section>
            <p title="">
                <label for="TEXT_1459555208452">Nodes:</label>
                <input type="text" id="TEXT_1459555208452" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1562002262893">Urinary Bladder:</label>
                <input type="text" id="TEXT_1562002262893" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1562002262894">Reproductive Organs:</label>
                <input type="text" id="TEXT_1562002262894" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1562002262895">Vasculature:</label>
                <input type="text" id="TEXT_1562002262895" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
            <p title="">
                <label for="TEXT_1459555208502">Musculoskeletal: </label>
                <input type="text" id="TEXT_1459555208502" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="Normal." />
            </p>
        </section>
        <section id="impression" class="level1" data-section-name="Impression">
            <header class="level1">
                Impression
            </header>
            <p title="https://www.radelement.org/element/RDE195">
                <label for="impressionText">Appendicitis Detection</label>
                <input type="text" id="impressionText" name="" data-field-type="TEXT" data-field-completion-action="PROHIBIT" value="RDE195" />
            </p>
        </section>
    </body>
</html>




`;