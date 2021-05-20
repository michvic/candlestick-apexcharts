import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { formatarMoedaIMask } from "./helpres";

function CandleStick() {
  const seriesData = [
    { x: new Date(1601937000000), y: [629.81, 650.5, 623.04, 633.33] },
    { x: new Date(1602023400000), y: [632.01, 643.59, 620, 630.11] },
    { x: new Date(1602109800000), y: [630.71, 648.95, 623.34, 635.65] },
    { x: new Date(1602196200000), y: [635.65, 651, 629.67, 638.24] },
    { x: new Date(1602282600000), y: [638.24, 640, 620, 624.47] },
    { x: new Date(1602369000000), y: [624.53, 636.03, 621.68, 624.31] },
    { x: new Date(1602455400000), y: [624.61, 632.2, 617, 626.02] },
    { x: new Date(1602541800000), y: [627, 627.62, 584.22, 603.02] },
    { x: new Date(1602628200000), y: [605, 608.03, 598.95, 604.01] },
    { x: new Date(1602714600000), y: [604.5, 614.4, 602.26, 608.02] },
    { x: new Date(1602801000000), y: [608.02, 610.68, 601.99, 608.91] },
    { x: new Date(1602887400000), y: [608.91, 618.99, 608.01, 612] },
    { x: new Date(1602973800000), y: [612, 615.13, 605.09, 612] },
    { x: new Date(1603060200000), y: [612, 624.12, 608.43, 622.95] },
    { x: new Date(1603146600000), y: [623.91, 623.91, 615, 615.67] }
  ];
  const optionsDefault = {
    chart: {
      locales: [
        {
          name: "pt-br",
          options: {
            months: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro"
            ],
            shortMonths: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez"
            ],
            days: [
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado"
            ],
            shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            toolbar: {
              exportToSVG: "Baixar SVG",
              exportToPNG: "Baixar PNG",
              exportToCSV: "Baixar CSV",
              menu: "Menu",
              selection: "Selecionar",
              selectionZoom: "Selecionar Zoom",
              zoomIn: "Aumentar",
              zoomOut: "Diminuir",
              pan: "Navegação",
              reset: "Reiniciar Zoom"
            }
          }
        }
      ],
      defaultLocale: "pt-br",
      type: "candlestick",
      height: 350
    },
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: false
        }
      }
    },
    title: {
      text: "Histórico de frete no lote",
      align: "left"
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        formatter(value) {
          return formatarMoedaIMask(value);
        }
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm"
        }
        // formatter(value) {
        //   console.log(moment(value).format('DD/MM/YYYY'));
        //   return moment(value).format('DD/MM/YYYY');
        // },
        // formatter(value, timestamp, opts) {
        //   console.log({ value, timestamp, opts });
        //   return opts.dateFormatter(new Date(timestamp)).format('dd MMM');
        // }
      }
    },
    tooltip: {
      custom({ seriesIndex, dataPointIndex, w }) {
        const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
        return (
          `${
            '<div class="apexcharts-tooltip-candlestick">' +
            '<div>Início: <span class="value"> <b>'
          }${formatarMoedaIMask(open)}</b></span></div>` +
          `<div>Máx: <span class="value"> <b>${formatarMoedaIMask(
            high
          )}</b></span></div>` +
          `<div>Min: <span class="value"> <b>${formatarMoedaIMask(
            low
          )}</b></span></div>` +
          `<div>Fim: <span class="value"> <b>${formatarMoedaIMask(
            close
          )}</b></span></div>` +
          "</div>"
        );
      }
    }
  };
  const [series, setSeries] = useState([{ data: seriesData }]);
  const [options, setOptions] = useState(optionsDefault);

  // this.state = {
  //   series: ,
  //   options:
  // };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
}

export default CandleStick;
