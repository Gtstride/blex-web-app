import React from 'react'

const Map = () => {
  return (
			<div
				className="mapouter"
				id="mapouter"
				style={{ marginBottom: "65px", marginLeft: "50px" }}
			>
				<div className="gmap_canvas">
					<iframe
						title="map"
						width={1080}
						height={447}
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=eespace&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder={0}
						scrolling="no"
						marginHeight={0}
						marginWidth={0}
					/>
					<br />
					<style
						dangerouslySetInnerHTML={{
							__html:
								".mapouter{position:relative;text-align:right;height:447px;width:1080px;}",
						}}
					/>
					<style
						dangerouslySetInnerHTML={{
							__html:
								".gmap_canvas {overflow:hidden;background:none!important;height:447px;width:1080px;}",
						}}
					/>
				</div>
			</div>
		);
}

export default Map



