import * as express from "express";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;

    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
        res.status(200).send( "Hello world!" );
    });

    // define a route to handle logout
    app.get( "/test", ( req: any, res ) => {
        res.status(200).send( "Hello world 2!" );
    });
};