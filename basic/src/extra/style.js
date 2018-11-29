import styled from 'styled-components';

const Container = styled.div`
  /**
 * CSS Clock
 * Design inspired by the SBB (Swiss Railroads)
 *
 * @author Julian Wachholz
 * @date 11/04/10
 */

  /* nothing interesting */
  ::selection {
    color: #ffffff;
    background: #ff9900;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  ::-moz-selection {
    color: #ffffff;
    background: #ff9900;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: #f0f0f0;
    font: normal 80.01%/1.6em Verdana;
    color: #444444;
    text-shadow: 0 1px 0 #ffffff;
  }
  h1 {
    margin: 1em;
  }
  form {
    position: absolute;
    top: 1em;
    right: 1em;
  }
  label,
  select {
    cursor: pointer;
  }
  .hide {
    text-align: right;
    font-size: 9px;
  }
  #info {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    margin-left: -175px;
    margin-top: 200px;
    text-align: justify;
  }
  a {
    text-decoration: none;
    color: inherit;
    padding-bottom: 1px;
    border-bottom: 1px solid #ff9900;
  }
  a:hover {
    border-bottom: 1px solid #cccccc;
  }
  .hide a {
    color: #bcbcbc;
    border: none;
  }
  .hide a:after {
    display: inline-block;
    content: '';
    padding-right: 6px;
  }
  .hide a:hover:after {
    padding-right: 0;
    content: '?';
  }

  /*
 * juicy part starts here
 */
  #clock {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 250px;
    margin: -125px 0 0 -125px;
    border: 3px solid black;
    background: #ffffff;

    -webkit-border-radius: 125px;
    -moz-border-radius: 125px;
    border-radius: 125px;
  }

  #indicators div,
  #clock .hand {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 101%;
    margin-left: -3px;
  }

  #indicators div:after,
  #clock .hand:after {
    content: '';
    display: block;
    width: 50%;
    height: 10px;
    margin-left: -1.5px;
    background: black;
  }

  #clock .hand:after {
    width: 100%;
    height: 65%;
  }

  #hour.hand:after {
    height: 50%;
    margin-top: 40px;
    width: 12px;
    margin-left: -4px;

    -webkit-border-top-left-radius: 3px 125px;
    -moz-border-top-left-radius: 3px/125px;
    border-top-left-radius: 3px 125px;

    -webkit-border-top-right-radius: 3px 125px;
    -moz-border-top-right-radius: 3px/125px;
    border-top-right-radius: 3px 125px;
  }

  #min.hand {
    margin-left: -2px;
  }
  #min.hand:after {
    width: 8px;

    -webkit-border-top-left-radius: 1px 125px;
    -moz-border-top-left-radius: 1px 125px;
    border-top-left-radius: 1px 125px;

    -webkit-border-top-right-radius: 1px 125px;
    -moz-border-top-right-radius: 1px 125px;
    border-top-right-radius: 1px 125px;
  }

  #sec.hand {
    margin-left: -2px;
  }
  #sec.hand:after {
    height: 50%;
    width: 2px;
    margin: 40px 0 0 0.5px;
    background: red;
  }
  #sec.hand:before {
    position: absolute;
    top: 32px;
    left: -11px;
    height: 24px;
    width: 24px;
    content: '';
    display: block;
    background: red;

    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }

  /* animations for webkit */
  #hour.hand {
    -webkit-animation: clock-hour 43200s linear infinite;
  }
  #min.hand {
    -webkit-animation: clock-minute 3600s linear infinite;
  }
  #sec.hand {
    -webkit-animation: clock-second 60s linear infinite;
  }

  @-webkit-keyframes clock-second {
    0% {
      -webkit-transform: rotate(0deg);
    }
    98% {
      -webkit-transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  /* Generated code :P */
  @-webkit-keyframes clock-minute {
    00.000% {
      -webkit-transform: rotate(0deg);
    }
    01.665% {
      -webkit-transform: rotate(0deg);
    }
    01.667% {
      -webkit-transform: rotate(6deg);
    }
    03.332% {
      -webkit-transform: rotate(6deg);
    }
    03.333% {
      -webkit-transform: rotate(12deg);
    }
    04.998% {
      -webkit-transform: rotate(12deg);
    }
    05.000% {
      -webkit-transform: rotate(18deg);
    }
    06.665% {
      -webkit-transform: rotate(18deg);
    }
    06.667% {
      -webkit-transform: rotate(24deg);
    }
    08.332% {
      -webkit-transform: rotate(24deg);
    }
    08.333% {
      -webkit-transform: rotate(30deg);
    }
    09.998% {
      -webkit-transform: rotate(30deg);
    }
    10.000% {
      -webkit-transform: rotate(36deg);
    }
    11.665% {
      -webkit-transform: rotate(36deg);
    }
    11.667% {
      -webkit-transform: rotate(42deg);
    }
    13.332% {
      -webkit-transform: rotate(42deg);
    }
    13.333% {
      -webkit-transform: rotate(48deg);
    }
    14.998% {
      -webkit-transform: rotate(48deg);
    }
    15.000% {
      -webkit-transform: rotate(54deg);
    }
    16.665% {
      -webkit-transform: rotate(54deg);
    }
    16.667% {
      -webkit-transform: rotate(60deg);
    }
    18.332% {
      -webkit-transform: rotate(60deg);
    }
    18.333% {
      -webkit-transform: rotate(66deg);
    }
    19.998% {
      -webkit-transform: rotate(66deg);
    }
    20.000% {
      -webkit-transform: rotate(72deg);
    }
    21.665% {
      -webkit-transform: rotate(72deg);
    }
    21.667% {
      -webkit-transform: rotate(78deg);
    }
    23.332% {
      -webkit-transform: rotate(78deg);
    }
    23.333% {
      -webkit-transform: rotate(84deg);
    }
    24.998% {
      -webkit-transform: rotate(84deg);
    }
    25.000% {
      -webkit-transform: rotate(90deg);
    }
    26.665% {
      -webkit-transform: rotate(90deg);
    }
    26.667% {
      -webkit-transform: rotate(96deg);
    }
    28.332% {
      -webkit-transform: rotate(96deg);
    }
    28.333% {
      -webkit-transform: rotate(102deg);
    }
    29.998% {
      -webkit-transform: rotate(102deg);
    }
    30.000% {
      -webkit-transform: rotate(108deg);
    }
    31.665% {
      -webkit-transform: rotate(108deg);
    }
    31.667% {
      -webkit-transform: rotate(114deg);
    }
    33.332% {
      -webkit-transform: rotate(114deg);
    }
    33.333% {
      -webkit-transform: rotate(120deg);
    }
    34.998% {
      -webkit-transform: rotate(120deg);
    }
    35.000% {
      -webkit-transform: rotate(125deg);
    }
    36.665% {
      -webkit-transform: rotate(125deg);
    }
    36.667% {
      -webkit-transform: rotate(132deg);
    }
    38.332% {
      -webkit-transform: rotate(132deg);
    }
    38.333% {
      -webkit-transform: rotate(138deg);
    }
    39.998% {
      -webkit-transform: rotate(138deg);
    }
    40.000% {
      -webkit-transform: rotate(144deg);
    }
    41.665% {
      -webkit-transform: rotate(144deg);
    }
    41.667% {
      -webkit-transform: rotate(150deg);
    }
    43.332% {
      -webkit-transform: rotate(150deg);
    }
    43.333% {
      -webkit-transform: rotate(156deg);
    }
    44.998% {
      -webkit-transform: rotate(156deg);
    }
    45.000% {
      -webkit-transform: rotate(162deg);
    }
    46.665% {
      -webkit-transform: rotate(162deg);
    }
    46.667% {
      -webkit-transform: rotate(168deg);
    }
    48.332% {
      -webkit-transform: rotate(168deg);
    }
    48.333% {
      -webkit-transform: rotate(174deg);
    }
    49.998% {
      -webkit-transform: rotate(174deg);
    }
    50.000% {
      -webkit-transform: rotate(180deg);
    }
    51.665% {
      -webkit-transform: rotate(180deg);
    }
    51.667% {
      -webkit-transform: rotate(186deg);
    }
    53.332% {
      -webkit-transform: rotate(186deg);
    }
    53.333% {
      -webkit-transform: rotate(192deg);
    }
    54.998% {
      -webkit-transform: rotate(192deg);
    }
    55.000% {
      -webkit-transform: rotate(198deg);
    }
    56.665% {
      -webkit-transform: rotate(198deg);
    }
    56.667% {
      -webkit-transform: rotate(204deg);
    }
    58.332% {
      -webkit-transform: rotate(204deg);
    }
    58.333% {
      -webkit-transform: rotate(210deg);
    }
    59.998% {
      -webkit-transform: rotate(210deg);
    }
    60.000% {
      -webkit-transform: rotate(216deg);
    }
    61.665% {
      -webkit-transform: rotate(216deg);
    }
    61.667% {
      -webkit-transform: rotate(222deg);
    }
    63.332% {
      -webkit-transform: rotate(222deg);
    }
    63.333% {
      -webkit-transform: rotate(228deg);
    }
    64.998% {
      -webkit-transform: rotate(228deg);
    }
    65.000% {
      -webkit-transform: rotate(234deg);
    }
    66.665% {
      -webkit-transform: rotate(234deg);
    }
    66.667% {
      -webkit-transform: rotate(240deg);
    }
    68.332% {
      -webkit-transform: rotate(240deg);
    }
    68.333% {
      -webkit-transform: rotate(246deg);
    }
    69.998% {
      -webkit-transform: rotate(246deg);
    }
    70.000% {
      -webkit-transform: rotate(251deg);
    }
    71.665% {
      -webkit-transform: rotate(251deg);
    }
    71.667% {
      -webkit-transform: rotate(258deg);
    }
    73.332% {
      -webkit-transform: rotate(258deg);
    }
    73.333% {
      -webkit-transform: rotate(264deg);
    }
    74.998% {
      -webkit-transform: rotate(264deg);
    }
    75.000% {
      -webkit-transform: rotate(270deg);
    }
    76.665% {
      -webkit-transform: rotate(270deg);
    }
    76.667% {
      -webkit-transform: rotate(276deg);
    }
    78.332% {
      -webkit-transform: rotate(276deg);
    }
    78.333% {
      -webkit-transform: rotate(282deg);
    }
    79.998% {
      -webkit-transform: rotate(282deg);
    }
    80.000% {
      -webkit-transform: rotate(288deg);
    }
    81.665% {
      -webkit-transform: rotate(288deg);
    }
    81.667% {
      -webkit-transform: rotate(294deg);
    }
    83.332% {
      -webkit-transform: rotate(294deg);
    }
    83.333% {
      -webkit-transform: rotate(300deg);
    }
    84.998% {
      -webkit-transform: rotate(300deg);
    }
    85.000% {
      -webkit-transform: rotate(306deg);
    }
    86.665% {
      -webkit-transform: rotate(306deg);
    }
    86.667% {
      -webkit-transform: rotate(312deg);
    }
    88.332% {
      -webkit-transform: rotate(312deg);
    }
    88.333% {
      -webkit-transform: rotate(318deg);
    }
    89.998% {
      -webkit-transform: rotate(318deg);
    }
    90.000% {
      -webkit-transform: rotate(324deg);
    }
    91.665% {
      -webkit-transform: rotate(324deg);
    }
    91.667% {
      -webkit-transform: rotate(330deg);
    }
    93.332% {
      -webkit-transform: rotate(330deg);
    }
    93.333% {
      -webkit-transform: rotate(336deg);
    }
    94.998% {
      -webkit-transform: rotate(336deg);
    }
    95.000% {
      -webkit-transform: rotate(342deg);
    }
    96.665% {
      -webkit-transform: rotate(342deg);
    }
    96.667% {
      -webkit-transform: rotate(348deg);
    }
    98.332% {
      -webkit-transform: rotate(348deg);
    }
    98.333% {
      -webkit-transform: rotate(354deg);
    }
    99.998% {
      -webkit-transform: rotate(354deg);
    }
    100.000% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes clock-hour {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  #indicators div:nth-child(5n):after {
    width: 100%;
    height: 30px;
  }

  /* Generated code... */
  #indicators div:nth-child(1) {
    -webkit-transform: rotate(6deg);
    -moz-transform: rotate(6deg);
    -o-transform: rotate(6deg);
    transform: rotate(6deg);
  }
  #indicators div:nth-child(2) {
    -webkit-transform: rotate(12deg);
    -moz-transform: rotate(12deg);
    -o-transform: rotate(12deg);
    transform: rotate(12deg);
  }
  #indicators div:nth-child(3) {
    -webkit-transform: rotate(18deg);
    -moz-transform: rotate(18deg);
    -o-transform: rotate(18deg);
    transform: rotate(18deg);
  }
  #indicators div:nth-child(4) {
    -webkit-transform: rotate(24deg);
    -moz-transform: rotate(24deg);
    -o-transform: rotate(24deg);
    transform: rotate(24deg);
  }
  #indicators div:nth-child(5) {
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  #indicators div:nth-child(6) {
    -webkit-transform: rotate(36deg);
    -moz-transform: rotate(36deg);
    -o-transform: rotate(36deg);
    transform: rotate(36deg);
  }
  #indicators div:nth-child(7) {
    -webkit-transform: rotate(42deg);
    -moz-transform: rotate(42deg);
    -o-transform: rotate(42deg);
    transform: rotate(42deg);
  }
  #indicators div:nth-child(8) {
    -webkit-transform: rotate(48deg);
    -moz-transform: rotate(48deg);
    -o-transform: rotate(48deg);
    transform: rotate(48deg);
  }
  #indicators div:nth-child(9) {
    -webkit-transform: rotate(54deg);
    -moz-transform: rotate(54deg);
    -o-transform: rotate(54deg);
    transform: rotate(54deg);
  }
  #indicators div:nth-child(10) {
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
  }
  #indicators div:nth-child(11) {
    -webkit-transform: rotate(66deg);
    -moz-transform: rotate(66deg);
    -o-transform: rotate(66deg);
    transform: rotate(66deg);
  }
  #indicators div:nth-child(12) {
    -webkit-transform: rotate(72deg);
    -moz-transform: rotate(72deg);
    -o-transform: rotate(72deg);
    transform: rotate(72deg);
  }
  #indicators div:nth-child(13) {
    -webkit-transform: rotate(78deg);
    -moz-transform: rotate(78deg);
    -o-transform: rotate(78deg);
    transform: rotate(78deg);
  }
  #indicators div:nth-child(14) {
    -webkit-transform: rotate(84deg);
    -moz-transform: rotate(84deg);
    -o-transform: rotate(84deg);
    transform: rotate(84deg);
  }
  #indicators div:nth-child(15) {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  #indicators div:nth-child(16) {
    -webkit-transform: rotate(96deg);
    -moz-transform: rotate(96deg);
    -o-transform: rotate(96deg);
    transform: rotate(96deg);
  }
  #indicators div:nth-child(17) {
    -webkit-transform: rotate(102deg);
    -moz-transform: rotate(102deg);
    -o-transform: rotate(102deg);
    transform: rotate(102deg);
  }
  #indicators div:nth-child(18) {
    -webkit-transform: rotate(108deg);
    -moz-transform: rotate(108deg);
    -o-transform: rotate(108deg);
    transform: rotate(108deg);
  }
  #indicators div:nth-child(19) {
    -webkit-transform: rotate(114deg);
    -moz-transform: rotate(114deg);
    -o-transform: rotate(114deg);
    transform: rotate(114deg);
  }
  #indicators div:nth-child(20) {
    -webkit-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -o-transform: rotate(120deg);
    transform: rotate(120deg);
  }
  #indicators div:nth-child(21) {
    -webkit-transform: rotate(126deg);
    -moz-transform: rotate(126deg);
    -o-transform: rotate(126deg);
    transform: rotate(126deg);
  }
  #indicators div:nth-child(22) {
    -webkit-transform: rotate(132deg);
    -moz-transform: rotate(132deg);
    -o-transform: rotate(132deg);
    transform: rotate(132deg);
  }
  #indicators div:nth-child(23) {
    -webkit-transform: rotate(138deg);
    -moz-transform: rotate(138deg);
    -o-transform: rotate(138deg);
    transform: rotate(138deg);
  }
  #indicators div:nth-child(24) {
    -webkit-transform: rotate(144deg);
    -moz-transform: rotate(144deg);
    -o-transform: rotate(144deg);
    transform: rotate(144deg);
  }
  #indicators div:nth-child(25) {
    -webkit-transform: rotate(150deg);
    -moz-transform: rotate(150deg);
    -o-transform: rotate(150deg);
    transform: rotate(150deg);
  }
  #indicators div:nth-child(26) {
    -webkit-transform: rotate(156deg);
    -moz-transform: rotate(156deg);
    -o-transform: rotate(156deg);
    transform: rotate(156deg);
  }
  #indicators div:nth-child(27) {
    -webkit-transform: rotate(162deg);
    -moz-transform: rotate(162deg);
    -o-transform: rotate(162deg);
    transform: rotate(162deg);
  }
  #indicators div:nth-child(28) {
    -webkit-transform: rotate(168deg);
    -moz-transform: rotate(168deg);
    -o-transform: rotate(168deg);
    transform: rotate(168deg);
  }
  #indicators div:nth-child(29) {
    -webkit-transform: rotate(174deg);
    -moz-transform: rotate(174deg);
    -o-transform: rotate(174deg);
    transform: rotate(174deg);
  }
  #indicators div:nth-child(30) {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  #indicators div:nth-child(31) {
    -webkit-transform: rotate(186deg);
    -moz-transform: rotate(186deg);
    -o-transform: rotate(186deg);
    transform: rotate(186deg);
  }
  #indicators div:nth-child(32) {
    -webkit-transform: rotate(192deg);
    -moz-transform: rotate(192deg);
    -o-transform: rotate(192deg);
    transform: rotate(192deg);
  }
  #indicators div:nth-child(33) {
    -webkit-transform: rotate(198deg);
    -moz-transform: rotate(198deg);
    -o-transform: rotate(198deg);
    transform: rotate(198deg);
  }
  #indicators div:nth-child(34) {
    -webkit-transform: rotate(204deg);
    -moz-transform: rotate(204deg);
    -o-transform: rotate(204deg);
    transform: rotate(204deg);
  }
  #indicators div:nth-child(35) {
    -webkit-transform: rotate(210deg);
    -moz-transform: rotate(210deg);
    -o-transform: rotate(210deg);
    transform: rotate(210deg);
  }
  #indicators div:nth-child(36) {
    -webkit-transform: rotate(216deg);
    -moz-transform: rotate(216deg);
    -o-transform: rotate(216deg);
    transform: rotate(216deg);
  }
  #indicators div:nth-child(37) {
    -webkit-transform: rotate(222deg);
    -moz-transform: rotate(222deg);
    -o-transform: rotate(222deg);
    transform: rotate(222deg);
  }
  #indicators div:nth-child(38) {
    -webkit-transform: rotate(228deg);
    -moz-transform: rotate(228deg);
    -o-transform: rotate(228deg);
    transform: rotate(228deg);
  }
  #indicators div:nth-child(39) {
    -webkit-transform: rotate(234deg);
    -moz-transform: rotate(234deg);
    -o-transform: rotate(234deg);
    transform: rotate(234deg);
  }
  #indicators div:nth-child(40) {
    -webkit-transform: rotate(240deg);
    -moz-transform: rotate(240deg);
    -o-transform: rotate(240deg);
    transform: rotate(240deg);
  }
  #indicators div:nth-child(41) {
    -webkit-transform: rotate(246deg);
    -moz-transform: rotate(246deg);
    -o-transform: rotate(246deg);
    transform: rotate(246deg);
  }
  #indicators div:nth-child(42) {
    -webkit-transform: rotate(252deg);
    -moz-transform: rotate(252deg);
    -o-transform: rotate(252deg);
    transform: rotate(252deg);
  }
  #indicators div:nth-child(43) {
    -webkit-transform: rotate(258deg);
    -moz-transform: rotate(258deg);
    -o-transform: rotate(258deg);
    transform: rotate(258deg);
  }
  #indicators div:nth-child(44) {
    -webkit-transform: rotate(264deg);
    -moz-transform: rotate(264deg);
    -o-transform: rotate(264deg);
    transform: rotate(264deg);
  }
  #indicators div:nth-child(45) {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  #indicators div:nth-child(46) {
    -webkit-transform: rotate(276deg);
    -moz-transform: rotate(276deg);
    -o-transform: rotate(276deg);
    transform: rotate(276deg);
  }
  #indicators div:nth-child(47) {
    -webkit-transform: rotate(282deg);
    -moz-transform: rotate(282deg);
    -o-transform: rotate(282deg);
    transform: rotate(282deg);
  }
  #indicators div:nth-child(48) {
    -webkit-transform: rotate(288deg);
    -moz-transform: rotate(288deg);
    -o-transform: rotate(288deg);
    transform: rotate(288deg);
  }
  #indicators div:nth-child(49) {
    -webkit-transform: rotate(294deg);
    -moz-transform: rotate(294deg);
    -o-transform: rotate(294deg);
    transform: rotate(294deg);
  }
  #indicators div:nth-child(50) {
    -webkit-transform: rotate(300deg);
    -moz-transform: rotate(300deg);
    -o-transform: rotate(300deg);
    transform: rotate(300deg);
  }
  #indicators div:nth-child(51) {
    -webkit-transform: rotate(306deg);
    -moz-transform: rotate(306deg);
    -o-transform: rotate(306deg);
    transform: rotate(306deg);
  }
  #indicators div:nth-child(52) {
    -webkit-transform: rotate(312deg);
    -moz-transform: rotate(312deg);
    -o-transform: rotate(312deg);
    transform: rotate(312deg);
  }
  #indicators div:nth-child(53) {
    -webkit-transform: rotate(318deg);
    -moz-transform: rotate(318deg);
    -o-transform: rotate(318deg);
    transform: rotate(318deg);
  }
  #indicators div:nth-child(54) {
    -webkit-transform: rotate(324deg);
    -moz-transform: rotate(324deg);
    -o-transform: rotate(324deg);
    transform: rotate(324deg);
  }
  #indicators div:nth-child(55) {
    -webkit-transform: rotate(330deg);
    -moz-transform: rotate(330deg);
    -o-transform: rotate(330deg);
    transform: rotate(330deg);
  }
  #indicators div:nth-child(56) {
    -webkit-transform: rotate(336deg);
    -moz-transform: rotate(336deg);
    -o-transform: rotate(336deg);
    transform: rotate(336deg);
  }
  #indicators div:nth-child(57) {
    -webkit-transform: rotate(342deg);
    -moz-transform: rotate(342deg);
    -o-transform: rotate(342deg);
    transform: rotate(342deg);
  }
  #indicators div:nth-child(58) {
    -webkit-transform: rotate(348deg);
    -moz-transform: rotate(348deg);
    -o-transform: rotate(348deg);
    transform: rotate(348deg);
  }
  #indicators div:nth-child(59) {
    -webkit-transform: rotate(354deg);
    -moz-transform: rotate(354deg);
    -o-transform: rotate(354deg);
    transform: rotate(354deg);
  }
  #indicators div:nth-child(60) {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export default Container;
