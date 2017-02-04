module Update exposing (..)

import Model exposing (..)


type Msg
    = NoOp


init : ( Model, Cmd Msg )
init =
    ( Model "", Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []
