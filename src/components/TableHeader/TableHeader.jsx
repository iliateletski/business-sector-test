import React from 'react'

import styles from './TableHeader.module.css'

const TableHeader = ({ onClick }) => {
	const click = e => {
		onClick(e.target.closest('button').value)
	}

	return (
		<thead className={styles.header}>
			<tr className={styles.header_tr}>
				<th className={styles.header_th}>
					<button
						className={styles.header_btn}
						value='id'
						onClick={e => click(e)}
					>
						<span className={styles.header_btn_text}>ID</span>
						<svg
							className={styles.header_btn_icon}
							viewBox='0 0 12 7'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								x1='0.353553'
								y1='0.646447'
								x2='6.18011'
								y2='6.47301'
								stroke='#FCFCFC'
							/>
							<line
								x1='5.64645'
								y1='6.30331'
								x2='11.3033'
								y2='0.646453'
								stroke='white'
							/>
						</svg>
					</button>
				</th>
				<th className={styles.header_th}>
					<button
						className={styles.header_btn}
						value='title'
						onClick={e => click(e)}
					>
						<span className={styles.header_btn_text}>
							Заголовок
						</span>
						<svg
							className={styles.header_btn_icon}
							viewBox='0 0 12 7'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								x1='0.353553'
								y1='0.646447'
								x2='6.18011'
								y2='6.47301'
								stroke='#FCFCFC'
							/>
							<line
								x1='5.64645'
								y1='6.30331'
								x2='11.3033'
								y2='0.646453'
								stroke='white'
							/>
						</svg>
					</button>
				</th>
				<th className={styles.header_th}>
					<button
						className={styles.header_btn}
						value='body'
						onClick={e => click(e)}
					>
						<span className={styles.header_btn_text}>Описание</span>
						<svg
							className={styles.header_btn_icon}
							viewBox='0 0 12 7'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								x1='0.353553'
								y1='0.646447'
								x2='6.18011'
								y2='6.47301'
								stroke='#FCFCFC'
							/>
							<line
								x1='5.64645'
								y1='6.30331'
								x2='11.3033'
								y2='0.646453'
								stroke='white'
							/>
						</svg>
					</button>
				</th>
			</tr>
		</thead>
	)
}

export default TableHeader
