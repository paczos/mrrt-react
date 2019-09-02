export const template_html = `<html>
<head>
    <meta charset="UTF-8">
    <meta content="base ct neck" name="dcterms.title">
    <meta content="61fbada4-88da-4f98-8d71-2dde038abbbb" name="dcterms.identifier">
    <meta content="en" name="dcterms.language">
    <meta content="2019-01-31" name="dcterms.date">
    <meta content="Nuance System" name="dcterms.creator">
    <title>base ct neck</title></head>
<body>
<section data-section-name="CT NECK WITHOUT CONTRAST">
    <header class="Level1">CT NECK WITHOUT CONTRAST</header>
    <p><label>HISTORY:</label><input type="text" name="Patient Age" value="Patient Age"></p>
    <p><label> old </label><input type="text" name="Patient Gender" value="Patient Gender"></p>
    <p><label>, </label><select name="history">
        <option name="" value="" selected="">neck pain</option>
        <option name="" value="" selected="">neck mass</option>
    </select></p>
</section>
<section data-section-name="TECHNIQUE:">
    <header class="Level1">TECHNIQUE:</header>
    <p><label>CT images of the neck were acquired without intravenous contrast.</label><br><label>CTDI: </label><input
            type="number" name="CTDI"><label>mGy</label></p>
    <p><label>DLP: </label><input type="number" name="DLP"><label>mGy-cm</label></p>
    <p><label>COMPARISON: </label><input type="text" name="comparison" value="None available"></p></section>
<section data-section-name="FINDINGS:">
    <header class="Level1">FINDINGS:</header>
    <p><label>Evaluation limited without intravenous contrast.</label><br><label>PHARYNGEAL MUCOSA: </label><input
            type="text" name="pharyngeal mucosa" value="Normal nasopharynx, oropharynx and hypopharynx."></p>
    <p><label>ORAL CAVITY: </label><input type="text" name="oral cavity"
                                          value="Normal including tongue and floor of mouth."></p>
    <p><label>LARYNX: </label><input type="text" name="larynx"
                                     value="Normal supraglottic, glottic and subglottic larynx."></p>
    <p><label>LYMPH NODES: </label><input type="text" name="nodes" value="No suspicious lymph nodes."></p>
    <p><label>SALIVARY GLANDS: </label><input type="text" name="salivary glands"
                                              value="Normal parotid, submandibular and sublingual glands."></p>
    <p><label>THYROID: </label><input type="text" name="thyroid" value="Normal."></p>
    <p><label>VESSELS AND CAROTID SPACE: </label><input type="text" name="vessels and carotid space" value="Normal.">
    </p>
    <p><label>BONES: </label><input type="text" name="bones" value="No significant abnormality."></p>
    <p><label>OTHER: </label><input type="text" name="other" value="Visualized lung apices are clear. "></p></section>
<section data-section-name="IMPRESSION:">
    <header class="Level1">IMPRESSION:</header>
    <p><textarea name="impression">Normal CT neck.</textarea></p></section>
</body>
</html>`;