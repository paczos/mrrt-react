export const template_html = `<!DOCTYPE html>
<html>
    <head>
        <title>name</title>
        <meta charset="UTF-8" />
        <meta name="dcterms.identifier" content="96bd6c03-0dd0-45d1-b206-de3bc4f55bea" />
        <meta name="dcterms.title" content="name" />
        <meta name="dcterms.description" content="desc" />
        <meta name="dcterms.type" content="IMAGE_REPORT_TEMPLATE" />
        <meta name="dcterms.language" content="en" />
        <meta name="dcterms.publisher" content="" />
        <meta name="dcterms.rights" content="May be used freely, subject to license agreement" />
        <meta name="dcterms.license" content="http://www.radreport.org/license.pdf" />
        <meta name="dcterms.date" content="2019-09-03" />
        <meta name="dcterms.creator" content="at" />
        <script type="text/xml">
            <template_attributes>
                <coded_content>
                    <coding_schemes>
                        <coding_scheme name="RADLEX" designator="2.16.840.1.113883.6.256"></coding_scheme>
                        <coding_scheme name="LOINC" designator="2.16.840.1.113883.6.1"></coding_scheme>
                    </coding_schemes>
                    <entry origtxt="findings">
                        <term>
                            <code meaning="Procedure Findings" value="59776-5" scheme="LOINC"></code>
                        </term>
                    </entry>
                    <entry origtxt="procedureInformation">
                        <term>
                            <code meaning="Current Imaging Procedure Description" value="55111-9" scheme="LOINC"></code>
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
                    <entry origtxt="clinicalInformation">
                        <term>
                            <code meaning="Clinical Information" value="55752-0" scheme="LOINC"></code>
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
                <label for="procedureInformationText">Text:</label>
                <textarea rows="3" cols="100" id="procedureInformationText" name="" data-field-type="TEXTAREA" data-field-completion-action="NONE"></textarea>
            </p>
        </section>
        <section id="clinicalInformation" class="level1" data-section-name="Clinical Information">
            <header class="level1">
                Clinical Information
            </header>
            <p title="">
                <label for="clinicalInformationText">Text:</label>
                <textarea rows="3" cols="100" id="clinicalInformationText" name="" data-field-type="TEXTAREA" data-field-completion-action="NONE"></textarea>
            </p>
        </section>
        <section id="comparisons" class="level1" data-section-name="Comparison">
            <header class="level1">
                Comparison
            </header>
            <p title="">
                <label for="comparisonsText">Text:</label>
                <textarea rows="3" cols="100" id="comparisonsText" name="" data-field-type="TEXTAREA" data-field-completion-action="NONE"></textarea>
            </p>
        </section>
        <section id="findings" class="level1" data-section-name="Findings">
            <header class="level1">
                Findings
            </header>
            <p title="">
                <label for="findingsText">Text:</label>
                <textarea rows="3" cols="100" id="findingsText" name="" data-field-type="TEXTAREA" data-field-completion-action="NONE"></textarea>
            </p>
            <section id="SECTION_HEADER_1567498957728" class="level2" data-section-name="OKokok">
                <header class="level2">
                    OKokok
                </header>
                <section id="SECTION_HEADER_1567498957729" class="level2" data-section-name="indented">
                    <header class="level2">
                        indented
                    </header>
                </section>
            </section>
            <p title="toollllltip">
                <label for="TEXT_1567498957730">text</label>
                <input type="text" id="TEXT_1567498957730" name="" data-field-type="TEXT" data-field-completion-action="NONE" value="vaaaalue" />
            </p>
        </section>
        <section id="impression" class="level1" data-section-name="Impression">
            <header class="level1">
                Impression
            </header>
            <p title="">
                <label for="impressionText">Text:</label>
                <textarea rows="3" cols="100" id="impressionText" name="" data-field-type="TEXTAREA" data-field-completion-action="NONE"></textarea>
            </p>
        </section>
    </body>
</html>
`;