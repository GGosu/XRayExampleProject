(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BP_Test_05"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BP_Test_05",
		"path": "/Game/BP/ExampleFolder1/BP_Test_05.BP_Test_05",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [
			{
				"name": "gameInstanceRef",
				"type": "object",
				"default": "None",
				"public": false
			},
			{
				"name": "pawnRef",
				"type": "object",
				"default": "None",
				"public": false
			},
			{
				"name": "gameModeRef",
				"type": "object",
				"default": "None",
				"public": false
			},
			{
				"name": "test01Ref",
				"type": "object",
				"default": "None",
				"public": false
			},
			{
				"name": "test02Ref",
				"type": "object",
				"default": "None",
				"public": false
			},
			{
				"name": "test03Ref",
				"type": "object",
				"default": "None",
				"public": false
			}
		],
		"functions": [
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 2,
				"localVariables": []
			},
			{
				"name": "ApplicationReceivedScreenOrientationChangedNotificationDelegate_Event_0",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [
					"inScreenOrientation: TEnumAsByte<EScreenOrientation::Type"
				],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "someUsedDispatcher_Event_0",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			}
		],
		"components": [
			{
				"name": "SCS_Components",
				"type": "SimpleConstructionScript",
				"parent": "Root"
			}
		],
		"graphs": [
			{
				"name": "EventGraph",
				"type": "EventGraph",
				"nodeCount": 35,
				"nodes": [
					{
						"guid": "346D3AA44F63DFDA4CBCB6BFAB21B940",
						"type": "K2Node_Event",
						"title": "Event BeginPlay",
						"executionOrder": 0,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Event BeginPlay",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1A552C964E5699F0E99438A4887D1E79.execute"
								]
							}
						]
					},
					{
						"guid": "0AEF80E648D5AF55B44BF0AEDDE13CAC",
						"type": "K2Node_Event",
						"title": "Event ActorBeginOverlap",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OtherActor",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "0A00E45F4503CE4B728F9F904DA2EF58",
						"type": "K2Node_Event",
						"title": "Event Tick",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "DeltaSeconds",
								"type": "real",
								"direction": "Output",
								"default": "0.0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "2AB4DFCE430C35AC74AE9FAA3AFFB892",
						"type": "K2Node_CallFunction",
						"title": "Get Game Instance",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3031266C415AFC4B1899CEB3239921EF.gameInstanceRef"
								]
							}
						]
					},
					{
						"guid": "3031266C415AFC4B1899CEB3239921EF",
						"type": "K2Node_VariableSet",
						"title": "Set gameInstanceRef",
						"executionOrder": 4,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "gameInstanceRef",
							"functionName": "",
							"literalValue": "GetGameInstance()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F9E98A634A94493FA7788D93DB888166.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"20F5BEBF46032FCF479412A6D758C919.execute"
								]
							},
							{
								"name": "gameInstanceRef",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2AB4DFCE430C35AC74AE9FAA3AFFB892.ReturnValue"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "315BC2CD48D220D2C035B2A032D72B07",
						"type": "K2Node_CallFunction",
						"title": "Get Player Pawn",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "PlayerIndex",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"20F5BEBF46032FCF479412A6D758C919.pawnRef"
								]
							}
						]
					},
					{
						"guid": "20F5BEBF46032FCF479412A6D758C919",
						"type": "K2Node_VariableSet",
						"title": "Set pawnRef",
						"executionOrder": 5,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "pawnRef",
							"functionName": "",
							"literalValue": "GetPlayerPawn()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3031266C415AFC4B1899CEB3239921EF.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DEC045DF40287FB541D02D9C294605A8.execute"
								]
							},
							{
								"name": "pawnRef",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"315BC2CD48D220D2C035B2A032D72B07.ReturnValue"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "8F6977BC47AC62C21C188A89B5882787",
						"type": "K2Node_CallFunction",
						"title": "Get Game Mode",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DEC045DF40287FB541D02D9C294605A8.gameModeRef"
								]
							}
						]
					},
					{
						"guid": "DEC045DF40287FB541D02D9C294605A8",
						"type": "K2Node_VariableSet",
						"title": "Set gameModeRef",
						"executionOrder": 6,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "gameModeRef",
							"functionName": "",
							"literalValue": "GetGameMode()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"20F5BEBF46032FCF479412A6D758C919.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EF8AA7EE4683862F8E0A80A134A8E589.execute"
								]
							},
							{
								"name": "gameModeRef",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8F6977BC47AC62C21C188A89B5882787.ReturnValue"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "EF8AA7EE4683862F8E0A80A134A8E589",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 7,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetAllActorsOfClass",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ActorClass: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DEC045DF40287FB541D02D9C294605A8.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7D84F5874F14B847A06ED8B1F5248011.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1F4390E9479640D11919EBA63913386E.Array"
								]
							}
						]
					},
					{
						"guid": "1F4390E9479640D11919EBA63913386E",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EF8AA7EE4683862F8E0A80A134A8E589.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7D84F5874F14B847A06ED8B1F5248011.test01Ref"
								]
							}
						]
					},
					{
						"guid": "7D84F5874F14B847A06ED8B1F5248011",
						"type": "K2Node_VariableSet",
						"title": "Set test01Ref",
						"executionOrder": 8,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "test01Ref",
							"functionName": "",
							"literalValue": "test01Ref",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EF8AA7EE4683862F8E0A80A134A8E589.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D04F379448F8617D936AEC98BF8475C7.execute"
								]
							},
							{
								"name": "test01Ref",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1F4390E9479640D11919EBA63913386E.Output"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "D04F379448F8617D936AEC98BF8475C7",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 9,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetAllActorsOfClass",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ActorClass: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7D84F5874F14B847A06ED8B1F5248011.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"699A632644864EECB620BFAABE616A8C.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DCD9B76846595362526F3BB789CB3FDF.Array"
								]
							}
						]
					},
					{
						"guid": "DCD9B76846595362526F3BB789CB3FDF",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D04F379448F8617D936AEC98BF8475C7.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"699A632644864EECB620BFAABE616A8C.test02Ref"
								]
							}
						]
					},
					{
						"guid": "699A632644864EECB620BFAABE616A8C",
						"type": "K2Node_VariableSet",
						"title": "Set test02Ref",
						"executionOrder": 10,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "test02Ref",
							"functionName": "",
							"literalValue": "test02Ref",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D04F379448F8617D936AEC98BF8475C7.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"610110254565EC8BE0304C8D5C1C1DC4.execute"
								]
							},
							{
								"name": "test02Ref",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DCD9B76846595362526F3BB789CB3FDF.Output"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "610110254565EC8BE0304C8D5C1C1DC4",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 11,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetAllActorsOfClass",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ActorClass: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"699A632644864EECB620BFAABE616A8C.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBA7219442ACD273B30778BB136F187.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5D06B84348E475D593FC76B503B24690.Array"
								]
							}
						]
					},
					{
						"guid": "5D06B84348E475D593FC76B503B24690",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"610110254565EC8BE0304C8D5C1C1DC4.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBA7219442ACD273B30778BB136F187.test03Ref"
								]
							}
						]
					},
					{
						"guid": "BBBA7219442ACD273B30778BB136F187",
						"type": "K2Node_VariableSet",
						"title": "Set test03Ref",
						"executionOrder": 12,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "test03Ref",
							"functionName": "",
							"literalValue": "test03Ref",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"610110254565EC8BE0304C8D5C1C1DC4.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA4C8B6F4FC9C03BFCB8879EABD470A2.execute"
								]
							},
							{
								"name": "test03Ref",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5D06B84348E475D593FC76B503B24690.Output"
								]
							},
							{
								"name": "Output_Get",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "B4AB0A044DF47FFF4B97B889293C62D2",
						"type": "K2Node_VariableGet",
						"title": "Get gameInstanceRef",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "gameInstanceRef",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA4C8B6F4FC9C03BFCB8879EABD470A2.Object"
								]
							}
						]
					},
					{
						"guid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
						"type": "K2Node_DynamicCast",
						"title": "Cast To PlatformGameInstance",
						"executionOrder": 13,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "cast",
							"operation": "dynamic_cast",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "GameInstance",
							"castToType": "PlatformGameInstance",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBA7219442ACD273B30778BB136F187.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"16F96DD24C065F780B5763A23C4C4CCA.execute"
								]
							},
							{
								"name": "CastFailed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"B4AB0A044DF47FFF4B97B889293C62D2.gameInstanceRef"
								]
							},
							{
								"name": "AsPlatform Game Instance",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"16F96DD24C065F780B5763A23C4C4CCA.self"
								]
							}
						]
					},
					{
						"guid": "9D4468254830F0D2CDE7B2B8EDAA161F",
						"type": "K2Node_CustomEvent",
						"title": "ApplicationReceivedScreenOrientationChangedNotificationDelegate_Event_0",
						"executionOrder": 17,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "ApplicationReceivedScreenOrientationChangedNotificationDelegate_Event_0",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"16F96DD24C065F780B5763A23C4C4CCA.Delegate"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2F6090D445CEA580F7AAE8A9BBFA713B.execute"
								]
							},
							{
								"name": "inScreenOrientation",
								"type": "byte",
								"direction": "Output",
								"default": "Unknown",
								"isOrphaned": false,
								"linked": [
									"4E93E71247E4DF2869C8488FC50EA3AD.Enumerator"
								]
							}
						]
					},
					{
						"guid": "16F96DD24C065F780B5763A23C4C4CCA",
						"type": "K2Node_AssignDelegate",
						"title": "Assign Application Received Screen Orientation Changed Notification Delegate",
						"executionOrder": 14,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA4C8B6F4FC9C03BFCB8879EABD470A2.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"88189BB04B3694C2426010BFA0ABD108.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA4C8B6F4FC9C03BFCB8879EABD470A2.AsPlatform Game Instance"
								]
							},
							{
								"name": "Delegate",
								"type": "delegate",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9D4468254830F0D2CDE7B2B8EDAA161F.OutputDelegate"
								]
							}
						]
					},
					{
						"guid": "2F6090D445CEA580F7AAE8A9BBFA713B",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 18,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: PrintString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9D4468254830F0D2CDE7B2B8EDAA161F.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"4E93E71247E4DF2869C8488FC50EA3AD.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "4E93E71247E4DF2869C8488FC50EA3AD",
						"type": "K2Node_GetEnumeratorNameAsString",
						"title": "Enum to String",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Enumerator",
								"type": "byte",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9D4468254830F0D2CDE7B2B8EDAA161F.inScreenOrientation"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2F6090D445CEA580F7AAE8A9BBFA713B.InString"
								]
							}
						]
					},
					{
						"guid": "D5CA67474475C85BFA4EEB9C2931748D",
						"type": "K2Node_VariableGet",
						"title": "Get test01Ref",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "test01Ref",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"88189BB04B3694C2426010BFA0ABD108.self"
								]
							}
						]
					},
					{
						"guid": "88189BB04B3694C2426010BFA0ABD108",
						"type": "K2Node_CallFunction",
						"title": "Some Other Used Event",
						"executionOrder": 15,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "SomeOtherUsedEvent",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: test01Ref"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"16F96DD24C065F780B5763A23C4C4CCA.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FEE3B6E94F7A8C6D5D4F55B96AC6F4D6.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D5CA67474475C85BFA4EEB9C2931748D.test01Ref"
								]
							}
						]
					},
					{
						"guid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
						"type": "K2Node_VariableGet",
						"title": "Get test02Ref",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "test02Ref",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FEE3B6E94F7A8C6D5D4F55B96AC6F4D6.self",
									"6FBE6D6B42FF1BA712B2B1AF9EFCF431.self"
								]
							}
						]
					},
					{
						"guid": "1CF029A04C2936D9BDDDEBAAAD2AFBC9",
						"type": "K2Node_CustomEvent",
						"title": "someUsedDispatcher_Event_0",
						"executionOrder": 19,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "someUsedDispatcher_Event_0",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FEE3B6E94F7A8C6D5D4F55B96AC6F4D6.Delegate"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E0424AFE4A390FEC24B6CE827900096C.execute"
								]
							}
						]
					},
					{
						"guid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
						"type": "K2Node_AssignDelegate",
						"title": "Assign Some Used Dispatcher",
						"executionOrder": 16,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"88189BB04B3694C2426010BFA0ABD108.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0D93CCCB47A2A23FECBBE0BECAC5FAFC.test02Ref"
								]
							},
							{
								"name": "Delegate",
								"type": "delegate",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1CF029A04C2936D9BDDDEBAAAD2AFBC9.OutputDelegate"
								]
							}
						]
					},
					{
						"guid": "E0424AFE4A390FEC24B6CE827900096C",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 20,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Hello",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1CF029A04C2936D9BDDDEBAAAD2AFBC9.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"6FBE6D6B42FF1BA712B2B1AF9EFCF431.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "6FBE6D6B42FF1BA712B2B1AF9EFCF431",
						"type": "K2Node_CallDelegate",
						"title": "Call Some Partly Used Dispatcher",
						"executionOrder": 21,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E0424AFE4A390FEC24B6CE827900096C.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0D93CCCB47A2A23FECBBE0BECAC5FAFC.test02Ref"
								]
							}
						]
					},
					{
						"guid": "4F225AFB4D757FD8A3BACF87635A6D6B",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1A552C964E5699F0E99438A4887D1E79.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBB25174F214F44C60A779951B7C24F.self"
								]
							}
						]
					},
					{
						"guid": "BBBB25174F214F44C60A779951B7C24F",
						"type": "K2Node_Message",
						"title": "Is Ok",
						"executionOrder": 2,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "SKEL_BPI_TestInterface",
						"interfaceFunction": "isOk",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "isOk",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: isOk()"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1A552C964E5699F0E99438A4887D1E79.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F9E98A634A94493FA7788D93DB888166.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4F225AFB4D757FD8A3BACF87635A6D6B.Output"
								]
							},
							{
								"name": "bSuccess",
								"type": "bool",
								"direction": "Output",
								"default": "false",
								"isOrphaned": false,
								"linked": [
									"F9E98A634A94493FA7788D93DB888166.Condition"
								]
							}
						]
					},
					{
						"guid": "F9E98A634A94493FA7788D93DB888166",
						"type": "K2Node_IfThenElse",
						"title": "Branch",
						"executionOrder": 3,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "branch",
							"operation": "if",
							"conditionExpression": "isOk()",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBB25174F214F44C60A779951B7C24F.then"
								]
							},
							{
								"name": "Condition",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": [
									"BBBB25174F214F44C60A779951B7C24F.bSuccess"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3031266C415AFC4B1899CEB3239921EF.execute"
								]
							},
							{
								"name": "else",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "1A552C964E5699F0E99438A4887D1E79",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetAllActorsOfClass",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ActorClass: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"346D3AA44F63DFDA4CBCB6BFAB21B940.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BBBB25174F214F44C60A779951B7C24F.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4F225AFB4D757FD8A3BACF87635A6D6B.Array"
								]
							}
						]
					}
				],
				"entryNodes": [
					"346D3AA44F63DFDA4CBCB6BFAB21B940",
					"9D4468254830F0D2CDE7B2B8EDAA161F",
					"1CF029A04C2936D9BDDDEBAAAD2AFBC9"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "346D3AA44F63DFDA4CBCB6BFAB21B940",
						"toNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
						"toNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
						"toNodeGuid": "F9E98A634A94493FA7788D93DB888166",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "F9E98A634A94493FA7788D93DB888166",
						"toNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "branch_true"
					},
					{
						"fromNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
						"toNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
						"toNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
						"toNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
						"toNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
						"toNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
						"toNodeGuid": "699A632644864EECB620BFAABE616A8C",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "699A632644864EECB620BFAABE616A8C",
						"toNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
						"toNodeGuid": "BBBA7219442ACD273B30778BB136F187",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "BBBA7219442ACD273B30778BB136F187",
						"toNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
						"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
						"toNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
						"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
						"toNodeGuid": "2F6090D445CEA580F7AAE8A9BBFA713B",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "1CF029A04C2936D9BDDDEBAAAD2AFBC9",
						"toNodeGuid": "E0424AFE4A390FEC24B6CE827900096C",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "E0424AFE4A390FEC24B6CE827900096C",
						"toNodeGuid": "6FBE6D6B42FF1BA712B2B1AF9EFCF431",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "2AB4DFCE430C35AC74AE9FAA3AFFB892",
						"toNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
						"fromPin": "ReturnValue",
						"toPin": "gameInstanceRef",
						"dataType": "object",
						"value": "gameInstanceRef"
					},
					{
						"fromNodeGuid": "315BC2CD48D220D2C035B2A032D72B07",
						"toNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
						"fromPin": "ReturnValue",
						"toPin": "pawnRef",
						"dataType": "object",
						"value": "pawnRef"
					},
					{
						"fromNodeGuid": "8F6977BC47AC62C21C188A89B5882787",
						"toNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
						"fromPin": "ReturnValue",
						"toPin": "gameModeRef",
						"dataType": "object",
						"value": "gameModeRef"
					},
					{
						"fromNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
						"toNodeGuid": "1F4390E9479640D11919EBA63913386E",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "1F4390E9479640D11919EBA63913386E",
						"toNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
						"fromPin": "Output",
						"toPin": "test01Ref",
						"dataType": "object",
						"value": "test01Ref"
					},
					{
						"fromNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
						"toNodeGuid": "DCD9B76846595362526F3BB789CB3FDF",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "DCD9B76846595362526F3BB789CB3FDF",
						"toNodeGuid": "699A632644864EECB620BFAABE616A8C",
						"fromPin": "Output",
						"toPin": "test02Ref",
						"dataType": "object",
						"value": "test02Ref"
					},
					{
						"fromNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
						"toNodeGuid": "5D06B84348E475D593FC76B503B24690",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "5D06B84348E475D593FC76B503B24690",
						"toNodeGuid": "BBBA7219442ACD273B30778BB136F187",
						"fromPin": "Output",
						"toPin": "test03Ref",
						"dataType": "object",
						"value": "test03Ref"
					},
					{
						"fromNodeGuid": "B4AB0A044DF47FFF4B97B889293C62D2",
						"toNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
						"fromPin": "gameInstanceRef",
						"toPin": "Object",
						"dataType": "object",
						"value": "gameInstanceRef"
					},
					{
						"fromNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
						"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
						"fromPin": "AsPlatform Game Instance",
						"toPin": "self",
						"dataType": "object",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
						"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
						"fromPin": "OutputDelegate",
						"toPin": "Delegate",
						"dataType": "delegate",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "4E93E71247E4DF2869C8488FC50EA3AD",
						"toNodeGuid": "2F6090D445CEA580F7AAE8A9BBFA713B",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
						"toNodeGuid": "4E93E71247E4DF2869C8488FC50EA3AD",
						"fromPin": "inScreenOrientation",
						"toPin": "Enumerator",
						"dataType": "byte",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "D5CA67474475C85BFA4EEB9C2931748D",
						"toNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
						"fromPin": "test01Ref",
						"toPin": "self",
						"dataType": "object",
						"value": "SomeOtherUsedEvent()"
					},
					{
						"fromNodeGuid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
						"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
						"fromPin": "test02Ref",
						"toPin": "self",
						"dataType": "object",
						"value": "test02Ref"
					},
					{
						"fromNodeGuid": "1CF029A04C2936D9BDDDEBAAAD2AFBC9",
						"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
						"fromPin": "OutputDelegate",
						"toPin": "Delegate",
						"dataType": "delegate",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
						"toNodeGuid": "6FBE6D6B42FF1BA712B2B1AF9EFCF431",
						"fromPin": "test02Ref",
						"toPin": "self",
						"dataType": "object",
						"value": "test02Ref"
					},
					{
						"fromNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
						"toNodeGuid": "4F225AFB4D757FD8A3BACF87635A6D6B",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "4F225AFB4D757FD8A3BACF87635A6D6B",
						"toNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "isOk()"
					},
					{
						"fromNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
						"toNodeGuid": "F9E98A634A94493FA7788D93DB888166",
						"fromPin": "bSuccess",
						"toPin": "Condition",
						"dataType": "bool",
						"value": "isOk()"
					}
				],
				"deadCodeNodes": [
					"20F5BEBF46032FCF479412A6D758C919",
					"DEC045DF40287FB541D02D9C294605A8",
					"BBBA7219442ACD273B30778BB136F187",
					"315BC2CD48D220D2C035B2A032D72B07",
					"8F6977BC47AC62C21C188A89B5882787",
					"5D06B84348E475D593FC76B503B24690"
				]
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "B859E12949E9A412DF8F6DAA36237AEF",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 22,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"B859E12949E9A412DF8F6DAA36237AEF"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			}
		],
		"interfaces": [],
		"interfaceCalls": [
			{
				"interfaceName": "SKEL_BPI_TestInterface",
				"functionName": "isOk",
				"nodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "SKEL_BPI_TestInterface",
				"functionName": "isOk",
				"nodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			}
		],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "346D3AA44F63DFDA4CBCB6BFAB21B940",
				"toNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
				"toNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"toNodeGuid": "F9E98A634A94493FA7788D93DB888166",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "F9E98A634A94493FA7788D93DB888166",
				"toNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "branch_true"
			},
			{
				"fromNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
				"toNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
				"toNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
				"toNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
				"toNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
				"toNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
				"toNodeGuid": "699A632644864EECB620BFAABE616A8C",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "699A632644864EECB620BFAABE616A8C",
				"toNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
				"toNodeGuid": "BBBA7219442ACD273B30778BB136F187",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "BBBA7219442ACD273B30778BB136F187",
				"toNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
				"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
				"toNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
				"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
				"toNodeGuid": "2F6090D445CEA580F7AAE8A9BBFA713B",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "1CF029A04C2936D9BDDDEBAAAD2AFBC9",
				"toNodeGuid": "E0424AFE4A390FEC24B6CE827900096C",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "E0424AFE4A390FEC24B6CE827900096C",
				"toNodeGuid": "6FBE6D6B42FF1BA712B2B1AF9EFCF431",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "2AB4DFCE430C35AC74AE9FAA3AFFB892",
				"toNodeGuid": "3031266C415AFC4B1899CEB3239921EF",
				"fromPin": "ReturnValue",
				"toPin": "gameInstanceRef",
				"dataType": "object",
				"value": "gameInstanceRef"
			},
			{
				"fromNodeGuid": "315BC2CD48D220D2C035B2A032D72B07",
				"toNodeGuid": "20F5BEBF46032FCF479412A6D758C919",
				"fromPin": "ReturnValue",
				"toPin": "pawnRef",
				"dataType": "object",
				"value": "pawnRef"
			},
			{
				"fromNodeGuid": "8F6977BC47AC62C21C188A89B5882787",
				"toNodeGuid": "DEC045DF40287FB541D02D9C294605A8",
				"fromPin": "ReturnValue",
				"toPin": "gameModeRef",
				"dataType": "object",
				"value": "gameModeRef"
			},
			{
				"fromNodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
				"toNodeGuid": "1F4390E9479640D11919EBA63913386E",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "1F4390E9479640D11919EBA63913386E",
				"toNodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
				"fromPin": "Output",
				"toPin": "test01Ref",
				"dataType": "object",
				"value": "test01Ref"
			},
			{
				"fromNodeGuid": "D04F379448F8617D936AEC98BF8475C7",
				"toNodeGuid": "DCD9B76846595362526F3BB789CB3FDF",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "DCD9B76846595362526F3BB789CB3FDF",
				"toNodeGuid": "699A632644864EECB620BFAABE616A8C",
				"fromPin": "Output",
				"toPin": "test02Ref",
				"dataType": "object",
				"value": "test02Ref"
			},
			{
				"fromNodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
				"toNodeGuid": "5D06B84348E475D593FC76B503B24690",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "5D06B84348E475D593FC76B503B24690",
				"toNodeGuid": "BBBA7219442ACD273B30778BB136F187",
				"fromPin": "Output",
				"toPin": "test03Ref",
				"dataType": "object",
				"value": "test03Ref"
			},
			{
				"fromNodeGuid": "B4AB0A044DF47FFF4B97B889293C62D2",
				"toNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
				"fromPin": "gameInstanceRef",
				"toPin": "Object",
				"dataType": "object",
				"value": "gameInstanceRef"
			},
			{
				"fromNodeGuid": "CA4C8B6F4FC9C03BFCB8879EABD470A2",
				"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
				"fromPin": "AsPlatform Game Instance",
				"toPin": "self",
				"dataType": "object",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
				"toNodeGuid": "16F96DD24C065F780B5763A23C4C4CCA",
				"fromPin": "OutputDelegate",
				"toPin": "Delegate",
				"dataType": "delegate",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "4E93E71247E4DF2869C8488FC50EA3AD",
				"toNodeGuid": "2F6090D445CEA580F7AAE8A9BBFA713B",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "9D4468254830F0D2CDE7B2B8EDAA161F",
				"toNodeGuid": "4E93E71247E4DF2869C8488FC50EA3AD",
				"fromPin": "inScreenOrientation",
				"toPin": "Enumerator",
				"dataType": "byte",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "D5CA67474475C85BFA4EEB9C2931748D",
				"toNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
				"fromPin": "test01Ref",
				"toPin": "self",
				"dataType": "object",
				"value": "SomeOtherUsedEvent()"
			},
			{
				"fromNodeGuid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
				"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
				"fromPin": "test02Ref",
				"toPin": "self",
				"dataType": "object",
				"value": "test02Ref"
			},
			{
				"fromNodeGuid": "1CF029A04C2936D9BDDDEBAAAD2AFBC9",
				"toNodeGuid": "FEE3B6E94F7A8C6D5D4F55B96AC6F4D6",
				"fromPin": "OutputDelegate",
				"toPin": "Delegate",
				"dataType": "delegate",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
				"toNodeGuid": "6FBE6D6B42FF1BA712B2B1AF9EFCF431",
				"fromPin": "test02Ref",
				"toPin": "self",
				"dataType": "object",
				"value": "test02Ref"
			},
			{
				"fromNodeGuid": "1A552C964E5699F0E99438A4887D1E79",
				"toNodeGuid": "4F225AFB4D757FD8A3BACF87635A6D6B",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "4F225AFB4D757FD8A3BACF87635A6D6B",
				"toNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "isOk()"
			},
			{
				"fromNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"toNodeGuid": "F9E98A634A94493FA7788D93DB888166",
				"fromPin": "bSuccess",
				"toPin": "Condition",
				"dataType": "bool",
				"value": "isOk()"
			}
		],
		"variableUsages": [
			{
				"nodeGuid": "3031266C415AFC4B1899CEB3239921EF",
				"graphName": "EventGraph",
				"variableName": "gameInstanceRef",
				"isRead": false,
				"value": "GetGameInstance()",
				"executionOrder": 4
			},
			{
				"nodeGuid": "20F5BEBF46032FCF479412A6D758C919",
				"graphName": "EventGraph",
				"variableName": "pawnRef",
				"isRead": false,
				"value": "GetPlayerPawn()",
				"executionOrder": 5
			},
			{
				"nodeGuid": "DEC045DF40287FB541D02D9C294605A8",
				"graphName": "EventGraph",
				"variableName": "gameModeRef",
				"isRead": false,
				"value": "GetGameMode()",
				"executionOrder": 6
			},
			{
				"nodeGuid": "7D84F5874F14B847A06ED8B1F5248011",
				"graphName": "EventGraph",
				"variableName": "test01Ref",
				"isRead": false,
				"value": "test01Ref",
				"executionOrder": 8
			},
			{
				"nodeGuid": "699A632644864EECB620BFAABE616A8C",
				"graphName": "EventGraph",
				"variableName": "test02Ref",
				"isRead": false,
				"value": "test02Ref",
				"executionOrder": 10
			},
			{
				"nodeGuid": "BBBA7219442ACD273B30778BB136F187",
				"graphName": "EventGraph",
				"variableName": "test03Ref",
				"isRead": false,
				"value": "test03Ref",
				"executionOrder": 12
			},
			{
				"nodeGuid": "B4AB0A044DF47FFF4B97B889293C62D2",
				"graphName": "EventGraph",
				"variableName": "gameInstanceRef",
				"isRead": true,
				"value": "",
				"executionOrder": 0
			},
			{
				"nodeGuid": "D5CA67474475C85BFA4EEB9C2931748D",
				"graphName": "EventGraph",
				"variableName": "test01Ref",
				"isRead": true,
				"value": "",
				"executionOrder": 0
			},
			{
				"nodeGuid": "0D93CCCB47A2A23FECBBE0BECAC5FAFC",
				"graphName": "EventGraph",
				"variableName": "test02Ref",
				"isRead": true,
				"value": "",
				"executionOrder": 0
			}
		],
		"functionCalls": [
			{
				"nodeGuid": "2AB4DFCE430C35AC74AE9FAA3AFFB892",
				"graphName": "EventGraph",
				"functionName": "GetGameInstance",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": []
			},
			{
				"nodeGuid": "315BC2CD48D220D2C035B2A032D72B07",
				"graphName": "EventGraph",
				"functionName": "GetPlayerPawn",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"PlayerIndex: 0"
				]
			},
			{
				"nodeGuid": "8F6977BC47AC62C21C188A89B5882787",
				"graphName": "EventGraph",
				"functionName": "GetGameMode",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": []
			},
			{
				"nodeGuid": "EF8AA7EE4683862F8E0A80A134A8E589",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 7,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "D04F379448F8617D936AEC98BF8475C7",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 9,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "610110254565EC8BE0304C8D5C1C1DC4",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 11,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "2F6090D445CEA580F7AAE8A9BBFA713B",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 18,
				"arguments": [
					"InString: PrintString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "88189BB04B3694C2426010BFA0ABD108",
				"graphName": "EventGraph",
				"functionName": "SomeOtherUsedEvent",
				"returnValue": "",
				"executionOrder": 15,
				"arguments": [
					"self: test01Ref"
				]
			},
			{
				"nodeGuid": "E0424AFE4A390FEC24B6CE827900096C",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 20,
				"arguments": [
					"InString: Hello",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"graphName": "EventGraph",
				"functionName": "isOk",
				"returnValue": "used",
				"executionOrder": 2,
				"arguments": [
					"self: isOk()"
				]
			},
			{
				"nodeGuid": "1A552C964E5699F0E99438A4887D1E79",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 1,
				"arguments": [
					"ActorClass: ?"
				]
			}
		],
		"referencedBlueprints": [
			{
				"blueprintPath": "/Game/BP/BP_Test_01.BP_Test_01",
				"blueprintName": "BP_Test_01",
				"functionName": "SomeOtherUsedEvent",
				"sourceNodeGuid": "88189BB04B3694C2426010BFA0ABD108",
				"sourceGraphName": "EventGraph"
			},
			{
				"blueprintPath": "/Game/BP/BPI_TestInterface.BPI_TestInterface",
				"blueprintName": "BPI_TestInterface",
				"functionName": "isOk",
				"sourceNodeGuid": "BBBB25174F214F44C60A779951B7C24F",
				"sourceGraphName": "EventGraph"
			},
			{
				"blueprintPath": "/Script/Engine.GameInstance",
				"blueprintName": "GameInstance",
				"functionName": "",
				"sourceNodeGuid": "var:gameInstanceRef",
				"sourceGraphName": "Variables"
			},
			{
				"blueprintPath": "/Script/Engine.Pawn",
				"blueprintName": "Pawn",
				"functionName": "",
				"sourceNodeGuid": "var:pawnRef",
				"sourceGraphName": "Variables"
			},
			{
				"blueprintPath": "/Script/Engine.GameModeBase",
				"blueprintName": "GameModeBase",
				"functionName": "",
				"sourceNodeGuid": "var:gameModeRef",
				"sourceGraphName": "Variables"
			},
			{
				"blueprintPath": "/Game/BP/BP_Test_01.BP_Test_01",
				"blueprintName": "BP_Test_01",
				"functionName": "",
				"sourceNodeGuid": "var:test01Ref",
				"sourceGraphName": "Variables"
			},
			{
				"blueprintPath": "/Game/BP/ExampleFolder2/test_02.test_02",
				"blueprintName": "test_02",
				"functionName": "",
				"sourceNodeGuid": "var:test02Ref",
				"sourceGraphName": "Variables"
			},
			{
				"blueprintPath": "/Game/BP/ExampleFolder1/BP_Test_03.BP_Test_03",
				"blueprintName": "BP_Test_03",
				"functionName": "",
				"sourceNodeGuid": "var:test03Ref",
				"sourceGraphName": "Variables"
			}
		],
		"diagnostics": [],
		"deadCodeNodes": [
			"20F5BEBF46032FCF479412A6D758C919",
			"DEC045DF40287FB541D02D9C294605A8",
			"BBBA7219442ACD273B30778BB136F187",
			"315BC2CD48D220D2C035B2A032D72B07",
			"8F6977BC47AC62C21C188A89B5882787",
			"5D06B84348E475D593FC76B503B24690"
		],
		"totalExecutionPaths": 19,
		"maxExecutionDepth": 16
	},
	"issues": [
		{
			"level": "error",
			"type": "Dead Code",
			"desc": "'EventGraph': 6 unreachable — Set pawnRef, Set gameModeRef, Set test03Ref, Get Player Pawn, Get Game Mode, Get (a copy)",
			"rule_id": "BP-DEAD-001"
		},
		{
			"level": "warning",
			"type": "Memory Risk",
			"desc": "Hard references to 7 object types increase memory footprint and load times.",
			"rule_id": "BP-MEM-001"
		},
		{
			"level": "warning",
			"type": "Unhandled Cast",
			"desc": "Cast in 'EventGraph' has no CastFailed handler.",
			"rule_id": "BP-CAST-001"
		},
		{
			"level": "warning",
			"type": "Write-only Variable",
			"desc": "Variable 'pawnRef' is set but never read. The value is discarded.",
			"rule_id": "BP-VAR-002"
		},
		{
			"level": "warning",
			"type": "Write-only Variable",
			"desc": "Variable 'gameModeRef' is set but never read. The value is discarded.",
			"rule_id": "BP-VAR-002"
		},
		{
			"level": "warning",
			"type": "Write-only Variable",
			"desc": "Variable 'test03Ref' is set but never read. The value is discarded.",
			"rule_id": "BP-VAR-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'someUsedDispatcher_Event_0' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'gameInstanceRef' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'pawnRef' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'gameModeRef' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'test01Ref' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'test02Ref' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'test03Ref' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Event Naming",
			"desc": "Event 'someUsedDispatcher_Event_0' does not start with an uppercase letter.",
			"rule_id": "BP-NAMING-009"
		},
		{
			"level": "warning",
			"type": "Empty Tick",
			"desc": "Event Tick in 'EventGraph' has no connected logic but still runs every frame.",
			"rule_id": "BP-PERF-008"
		},
		{
			"level": "info",
			"type": "Dispatcher never unbound",
			"desc": "Dispatcher 'Application Received Screen Orientation Changed Notification Delegate' is bound from this Blueprint but never unbound — possible delegate leak.",
			"rule_id": "BP-DISP-002"
		},
		{
			"level": "info",
			"type": "Dispatcher never unbound",
			"desc": "Dispatcher 'Some Used Dispatcher' is bound from this Blueprint but never unbound — possible delegate leak.",
			"rule_id": "BP-DISP-002"
		}
	]
};})();