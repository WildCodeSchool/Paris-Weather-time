import React from 'react'

import "./BtnNavBar.scss"

class FilterInModal extends React.Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<div className="catfilter"> Filtres </div>
					</tr>
					<tr className="tablefilter">
						<div className="grfilter">Nombres de personnes</div>
						<ul className="ligrfilter">
							<li>1 à 5</li>
							<li>5 à 10</li>
							<li>10 et +</li>
						</ul>
					</tr>
					<tr className="tablefilter" >
						<div className="prifilter">Budget</div>
						<ul>
							<div className="lifilter">
								<li>10 à 25 €</li>
								<li>25 à 50 €</li>
								<li>50 et + €</li>
							</div>
						</ul>
					</tr>
					<tr className="tablefilter">
						<div className="whfilter">Où</div>
						<ul className="liwhfilter">
							<li>Monparnasse</li>
							<li>Champs-Elysées</li>
							<li>Portes de Versailles</li>
							<li>Place d'Italie</li>
						</ul>
					</tr>
				</table>
			</div>
		);
	}
}

export default FilterInModal