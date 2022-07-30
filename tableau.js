function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/dashboard1_omid/AlcoholandinfectionstatusandASTALT?:language=en-US&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}