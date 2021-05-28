/* Imports */
import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './resultado.css';
let dados = []
let dataset = [
    {
       "playerId":2,
       "playerName":"roberval",
       "score":55,
       "coins":50,
       "bet":0,
       "upVote":true,
       "isPtresent":true
    },
    {
       "playerId":3,
       "playerName":"tobias",
       "score":25,
       "coins":50,
       "bet":0,
       "upVote":true,
       "isPtresent":true
    },
    {
        "playerId":3,
        "playerName":"tomas",
        "score":20,
        "coins":50,
        "bet":0,
        "upVote":true,
        "isPtresent":true
     },
     {
        "playerId":3,
        "playerName":"maicon",
        "score":47,
        "coins":50,
        "bet":0,
        "upVote":true,
        "isPtresent":true
     }
 ]

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
export default function Resultado(dataset1) {
   // Create chart instance
   let chart = am4core.create("chartdiv", am4charts.XYChart); 
   
   
   for (var n in dataset){  
        dados.push({
            "name": dataset[n].playerName,
            "points": dataset[n].score,
            "color": chart.colors.next(),
           // "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
        })
        } 
    
    
    // Add data
    chart.data = dados.sort(function (a,b){
        return a.points > b.points ? -1 : a.points < b.points ? 1 : 0;
    }
    );
   
    
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.fontSize = 20;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeDasharray = "4,4";
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    
    // Do not crop bullets
    chart.maskBullets = false;
    
    // Remove padding
    chart.paddingBottom = 0;
    
    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";
    
    // Add bullets
    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());
 
 

return (
    <div>
      <Header />
      <div id="chartdiv"></div>
      <Footer />
    </div>
    
);
};
/*function getResultados(arrayResultado) {
    var resultado = [];
    for(var i in arrayResultado){
      resultado.push(arrayResultado[i].categoria);
    }
    return resultado;
  }*/