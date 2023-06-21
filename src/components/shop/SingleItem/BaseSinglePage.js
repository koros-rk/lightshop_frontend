import React from "react";
import {useLoaderData} from "react-router-dom";

export default function BaseSinglePage() {

    const data = useLoaderData()

    // console.log(data.params.slug)

    return <h1>BaseSinglePage, Slug: { data.params.slug }</h1>;
}

// export default BaseSinglePage