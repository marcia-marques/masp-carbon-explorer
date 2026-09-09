# MASP Carbon Explorer

An interactive dashboard for exploring the role of vegetation in offsetting anthropogenic CO₂ emissions across the
Metropolitan Area of São Paulo (MASP), Brazil. Developed as part of a Knowledge Mobilization Project (KMP) associated
with MSc research at the University of Toronto and supported by the School of Cities Graduate Fellows Program.

## Overview

MASP Carbon Explorer helps users understand how vegetation influences the carbon balance of cities across the
Metropolitan Area of São Paulo. The dashboard combines municipal emissions data with maps of carbon uptake and
release by vegetation estimated using the Vegetation Photosynthesis and Respiration Model (VPRM).

The dashboard allows users to:

- Explore carbon balance indicators for individual municipalities
- Compare vegetation uptake and anthropogenic emissions
- Learn about the scientific processes behind ecosystem-atmosphere carbon exchange

## Dashboard Features

### Story Mode

- Municipal carbon balance explorer
- Interactive municipality selection
- Key municipal indicators

### Scientific Mode

- Net Carbon Exchange (NEE)
- Carbon Uptake (GPP)
- Carbon Release (Reco)
- Land Cover visualization
- Pixel value inspection tool
- Layer documentation and scientific context

## Scientific Background

This dashboard is based on MSc research entitled *Estimating Vegetation CO₂ Fluxes in South America's Largest Megacity*.

Vegetation CO₂ exchanges were estimated using the Urban Vegetation Photosynthesis and Respiration Model (UrbanVPRM),
a modified version of VPRM that accounts for the contribution of urban vegetation, which can have a significant impact
on the local carbon budget.

The resulting maps provide spatially distributed estimates of Net Ecosystem Exchange (NEE), Gross Primary Productivity
(GPP), and Ecosystem Respiration (Reco), allowing users to explore how vegetation contributes to the urban carbon
balance across the region. These biogenic flux estimates are presented alongside municipal-scale anthropogenic emissions
data to place the contribution of vegetation in the context of human-made emissions.

> **Disclaimer**
>
> The estimates presented in this dashboard should be considered preliminary. The results are based on ongoing research
> and are subject to revision as methods, datasets, and model configurations continue to be evaluated and refined.

## Getting Started

```bash
git clone git@github.com:marcia-marques/masp-carbon-explorer.git
cd masp-carbon-explorer/frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal (typically `http://localhost:5173`).

## Dashboard Preview

### Welcome
![Welcome](docs/images/docs/images/dashboard_preview_1.png)

### Story Mode
![Story Mode](docs/images/docs/images/dashboard_preview_2.png)

### Scientific Mode
![Scientific Mode](docs/images/docs/images/dashboard_preview_3.png)

## License

This project is licensed under the MIT License. See the LICENSE file for details.