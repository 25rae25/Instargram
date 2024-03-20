'use client'

import useSWR from "swr"

export default function FollowingBar() {
	const {data, isLoading, error} = useSWR('')
	return(
		<p>FollowingBar</p>
	)
}