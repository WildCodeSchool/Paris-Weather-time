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
					<div className="grfilter">Groupe</div>
						<ul className="ligrfilter">
							<li>Famille</li>
							<li>Groupe d'amis</li>
							<li>Solo</li>
						</ul>
        	</tr>
					<tr className="tablefilter" >
					<div className="prifilter">Prix</div>
						<ul>
							<div  className="lifilter">
							<li>10 à 25 €</li>
							<li>25 à 50 €</li>
							<li>50 et + €</li>
							</div>
						</ul>
          </tr>
					<tr className="tablefilter">
					<div className="whfilter">Où</div>
					<ul className="liwhfilter">
							<li>Ici</li>
							<li>La bas</li>
							<li>Vers ici</li>
							<li>Vers la bas</li>
					</ul>
          </tr>
				</table>
			</div>
		);
	}
}

export default FilterInModal