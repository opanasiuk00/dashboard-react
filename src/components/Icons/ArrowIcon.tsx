import React from 'react'

type ArrowIconType = React.ComponentPropsWithRef<'svg'>;

export const ArrowIcon = (props: ArrowIconType) => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M6.05903 12.6667L10.3333 8.33333L6.05903 4L5 5.07365L8.21528 8.33333L5 11.593L6.05903 12.6667Z" />
		</svg>
	)
}
