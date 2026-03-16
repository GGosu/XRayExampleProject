(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BP_Test_06"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BP_Test_06",
		"path": "/Game/BP/ExampleFolder2/BP_Test_06.BP_Test_06",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [],
		"functions": [
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
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
				"nodeCount": 61,
				"nodes": [
					{
						"guid": "EF0FBC0D4972E627071B618BE63DFA9E",
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
									"7F6A5984459C0452E61AFCB841851DAE.execute"
								]
							}
						]
					},
					{
						"guid": "7F6A5984459C0452E61AFCB841851DAE",
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
									"EF0FBC0D4972E627071B618BE63DFA9E.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"53EA027843BC32525F608395409319E4.execute"
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
									"FFE13BB940040A4A0486BB82BC5622C5.Array"
								]
							}
						]
					},
					{
						"guid": "53EA027843BC32525F608395409319E4",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 2,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"7F6A5984459C0452E61AFCB841851DAE.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4A603EF64795180D8EA30A81003C6D79.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FFE13BB940040A4A0486BB82BC5622C5.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F3D897A54A3C0BD7E12ED29A0A9F9CA7.Object"
								]
							}
						]
					},
					{
						"guid": "4A603EF64795180D8EA30A81003C6D79",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 3,
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
								"InString: GetDisplayName()",
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
									"53EA027843BC32525F608395409319E4.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8862CD0E423032DAACB9AFAEC53AE2A8.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"F3D897A54A3C0BD7E12ED29A0A9F9CA7.ReturnValue"
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
						"guid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"53EA027843BC32525F608395409319E4.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4A603EF64795180D8EA30A81003C6D79.InString"
								]
							}
						]
					},
					{
						"guid": "FFE13BB940040A4A0486BB82BC5622C5",
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
									"7F6A5984459C0452E61AFCB841851DAE.OutActors"
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
									"53EA027843BC32525F608395409319E4.self"
								]
							}
						]
					},
					{
						"guid": "8862CD0E423032DAACB9AFAEC53AE2A8",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 4,
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
									"4A603EF64795180D8EA30A81003C6D79.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"86A9C1CE4D41F915BCE2479BD2528F85.execute"
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
									"211A01304F5C822843C91B860C2785B1.Array"
								]
							}
						]
					},
					{
						"guid": "86A9C1CE4D41F915BCE2479BD2528F85",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 5,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"8862CD0E423032DAACB9AFAEC53AE2A8.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4383C2664BC087311E3778AF47C17981.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"211A01304F5C822843C91B860C2785B1.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"6DDE14EB4BB8416B5ACABFBCAC421EFB.Object"
								]
							}
						]
					},
					{
						"guid": "4383C2664BC087311E3778AF47C17981",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 6,
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
								"InString: GetDisplayName()",
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
									"86A9C1CE4D41F915BCE2479BD2528F85.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3E72C6DB494C32E10CD9F1B63A387BD5.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"6DDE14EB4BB8416B5ACABFBCAC421EFB.ReturnValue"
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
						"guid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"86A9C1CE4D41F915BCE2479BD2528F85.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4383C2664BC087311E3778AF47C17981.InString"
								]
							}
						]
					},
					{
						"guid": "211A01304F5C822843C91B860C2785B1",
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
									"8862CD0E423032DAACB9AFAEC53AE2A8.OutActors"
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
									"86A9C1CE4D41F915BCE2479BD2528F85.self"
								]
							}
						]
					},
					{
						"guid": "3E72C6DB494C32E10CD9F1B63A387BD5",
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
									"4383C2664BC087311E3778AF47C17981.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7C06C87B4EFBA099B8D5138572C200BA.execute"
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
									"D41A51F94B29AFB872ED88B85754497E.Array"
								]
							}
						]
					},
					{
						"guid": "7C06C87B4EFBA099B8D5138572C200BA",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 8,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"3E72C6DB494C32E10CD9F1B63A387BD5.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4012848746DF5265996E328848F6B332.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D41A51F94B29AFB872ED88B85754497E.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BC9AE63C431622885387018417039C62.Object"
								]
							}
						]
					},
					{
						"guid": "4012848746DF5265996E328848F6B332",
						"type": "K2Node_CallFunction",
						"title": "Print String",
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
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: GetDisplayName()",
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
									"7C06C87B4EFBA099B8D5138572C200BA.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"B68AC7FC4F69DAE02B8D4589CD52828C.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"BC9AE63C431622885387018417039C62.ReturnValue"
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
						"guid": "BC9AE63C431622885387018417039C62",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7C06C87B4EFBA099B8D5138572C200BA.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4012848746DF5265996E328848F6B332.InString"
								]
							}
						]
					},
					{
						"guid": "D41A51F94B29AFB872ED88B85754497E",
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
									"3E72C6DB494C32E10CD9F1B63A387BD5.OutActors"
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
									"7C06C87B4EFBA099B8D5138572C200BA.self"
								]
							}
						]
					},
					{
						"guid": "B68AC7FC4F69DAE02B8D4589CD52828C",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 10,
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
									"4012848746DF5265996E328848F6B332.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CCD0F62F48B086EBA037E2BBB5C40D7D.execute"
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
									"4581E3A54FCAF4E838EA40AB1026E3E0.Array"
								]
							}
						]
					},
					{
						"guid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 11,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"B68AC7FC4F69DAE02B8D4589CD52828C.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"45E834FB416B7E623EF3098C479C84BC.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4581E3A54FCAF4E838EA40AB1026E3E0.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"87664F4647F996BAF93E33A6D992CB4B.Object"
								]
							}
						]
					},
					{
						"guid": "45E834FB416B7E623EF3098C479C84BC",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 12,
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
								"InString: GetDisplayName()",
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
									"CCD0F62F48B086EBA037E2BBB5C40D7D.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C1382ECD48973E02A30C7F85274098C2.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"87664F4647F996BAF93E33A6D992CB4B.ReturnValue"
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
						"guid": "87664F4647F996BAF93E33A6D992CB4B",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CCD0F62F48B086EBA037E2BBB5C40D7D.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"45E834FB416B7E623EF3098C479C84BC.InString"
								]
							}
						]
					},
					{
						"guid": "4581E3A54FCAF4E838EA40AB1026E3E0",
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
									"B68AC7FC4F69DAE02B8D4589CD52828C.OutActors"
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
									"CCD0F62F48B086EBA037E2BBB5C40D7D.self"
								]
							}
						]
					},
					{
						"guid": "C1382ECD48973E02A30C7F85274098C2",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 13,
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
									"45E834FB416B7E623EF3098C479C84BC.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A6E23EDA415EA0FCF0D31293B1DE8D4B.execute"
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
									"0D65DEBC4F2DEDAD3B3B7BAF67E0290F.Array"
								]
							}
						]
					},
					{
						"guid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 14,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"C1382ECD48973E02A30C7F85274098C2.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"37C3E8E34AEB8B623EBAEFA999B28DBA.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0D65DEBC4F2DEDAD3B3B7BAF67E0290F.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F0E7D0204D3ED9AF0D7D5CA4411C2602.Object"
								]
							}
						]
					},
					{
						"guid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
						"type": "K2Node_CallFunction",
						"title": "Print String",
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
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: GetDisplayName()",
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
									"A6E23EDA415EA0FCF0D31293B1DE8D4B.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"906066D94EE75F48EFAF48BC3C7AD30B.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"F0E7D0204D3ED9AF0D7D5CA4411C2602.ReturnValue"
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
						"guid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A6E23EDA415EA0FCF0D31293B1DE8D4B.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"37C3E8E34AEB8B623EBAEFA999B28DBA.InString"
								]
							}
						]
					},
					{
						"guid": "0D65DEBC4F2DEDAD3B3B7BAF67E0290F",
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
									"C1382ECD48973E02A30C7F85274098C2.OutActors"
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
									"A6E23EDA415EA0FCF0D31293B1DE8D4B.self"
								]
							}
						]
					},
					{
						"guid": "906066D94EE75F48EFAF48BC3C7AD30B",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 16,
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
									"37C3E8E34AEB8B623EBAEFA999B28DBA.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DA94B92E4D6A2FF787B38DBA249D45F2.execute"
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
									"4BE64A9A4D66521752E135B0DB1C197A.Array"
								]
							}
						]
					},
					{
						"guid": "DA94B92E4D6A2FF787B38DBA249D45F2",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 17,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"906066D94EE75F48EFAF48BC3C7AD30B.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"88DFDDC54C960E16B20212AAC5AD3AB4.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4BE64A9A4D66521752E135B0DB1C197A.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C9EC9201413B409B6900FCAF3E5AB0D1.Object"
								]
							}
						]
					},
					{
						"guid": "88DFDDC54C960E16B20212AAC5AD3AB4",
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
								"InString: GetDisplayName()",
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
									"DA94B92E4D6A2FF787B38DBA249D45F2.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2064D8844DADF6A1FE8DB4A5701D745B.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"C9EC9201413B409B6900FCAF3E5AB0D1.ReturnValue"
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
						"guid": "C9EC9201413B409B6900FCAF3E5AB0D1",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DA94B92E4D6A2FF787B38DBA249D45F2.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"88DFDDC54C960E16B20212AAC5AD3AB4.InString"
								]
							}
						]
					},
					{
						"guid": "4BE64A9A4D66521752E135B0DB1C197A",
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
									"906066D94EE75F48EFAF48BC3C7AD30B.OutActors"
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
									"DA94B92E4D6A2FF787B38DBA249D45F2.self"
								]
							}
						]
					},
					{
						"guid": "2064D8844DADF6A1FE8DB4A5701D745B",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 19,
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
									"88DFDDC54C960E16B20212AAC5AD3AB4.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4F3635CB46F5A53A4E807C9CCCC22AF8.execute"
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
									"DB538A4C478CDDCF83DFC296DEDE3093.Array"
								]
							}
						]
					},
					{
						"guid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 20,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"2064D8844DADF6A1FE8DB4A5701D745B.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E8145AF6419665FA3099219B886087B8.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DB538A4C478CDDCF83DFC296DEDE3093.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4AE397CB4748BB27C638BB852FDC4A1B.Object"
								]
							}
						]
					},
					{
						"guid": "E8145AF6419665FA3099219B886087B8",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 21,
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
								"InString: GetDisplayName()",
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
									"4F3635CB46F5A53A4E807C9CCCC22AF8.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E14F858E43CFFF048F34D4806276CCA9.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"4AE397CB4748BB27C638BB852FDC4A1B.ReturnValue"
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
						"guid": "4AE397CB4748BB27C638BB852FDC4A1B",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4F3635CB46F5A53A4E807C9CCCC22AF8.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E8145AF6419665FA3099219B886087B8.InString"
								]
							}
						]
					},
					{
						"guid": "DB538A4C478CDDCF83DFC296DEDE3093",
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
									"2064D8844DADF6A1FE8DB4A5701D745B.OutActors"
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
									"4F3635CB46F5A53A4E807C9CCCC22AF8.self"
								]
							}
						]
					},
					{
						"guid": "E14F858E43CFFF048F34D4806276CCA9",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 22,
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
									"E8145AF6419665FA3099219B886087B8.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FFD77E7244A0F38FC58CA8B834B1B59A.execute"
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
									"81829803492D78687E2CE3A922E6A7B7.Array"
								]
							}
						]
					},
					{
						"guid": "FFD77E7244A0F38FC58CA8B834B1B59A",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 23,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"E14F858E43CFFF048F34D4806276CCA9.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3980CFE84B0F723FEAD526BF6477D862.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"81829803492D78687E2CE3A922E6A7B7.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3683F8494A05EE8A069D6CB139AD061B.Object"
								]
							}
						]
					},
					{
						"guid": "3980CFE84B0F723FEAD526BF6477D862",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 24,
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
								"InString: GetDisplayName()",
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
									"FFD77E7244A0F38FC58CA8B834B1B59A.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"6DC648264C120A6BB69E319F2FA02164.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"3683F8494A05EE8A069D6CB139AD061B.ReturnValue"
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
						"guid": "3683F8494A05EE8A069D6CB139AD061B",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FFD77E7244A0F38FC58CA8B834B1B59A.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3980CFE84B0F723FEAD526BF6477D862.InString"
								]
							}
						]
					},
					{
						"guid": "81829803492D78687E2CE3A922E6A7B7",
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
									"E14F858E43CFFF048F34D4806276CCA9.OutActors"
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
									"FFD77E7244A0F38FC58CA8B834B1B59A.self"
								]
							}
						]
					},
					{
						"guid": "6DC648264C120A6BB69E319F2FA02164",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 25,
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
									"3980CFE84B0F723FEAD526BF6477D862.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"33326E29476FF122BF189790BC5A259C.execute"
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
									"EF33558C4A6A776279571BBB05136B83.Array"
								]
							}
						]
					},
					{
						"guid": "33326E29476FF122BF189790BC5A259C",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 26,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"6DC648264C120A6BB69E319F2FA02164.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"05DECFB547C0171B24DD3FACBDA0CCA3.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EF33558C4A6A776279571BBB05136B83.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7325D4354980DD6A4E5DEEA4B8CA65ED.Object"
								]
							}
						]
					},
					{
						"guid": "05DECFB547C0171B24DD3FACBDA0CCA3",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 27,
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
								"InString: GetDisplayName()",
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
									"33326E29476FF122BF189790BC5A259C.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"28C4E9AB488F5A3A9159BDB8F6520B93.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"7325D4354980DD6A4E5DEEA4B8CA65ED.ReturnValue"
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
						"guid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"33326E29476FF122BF189790BC5A259C.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"05DECFB547C0171B24DD3FACBDA0CCA3.InString"
								]
							}
						]
					},
					{
						"guid": "EF33558C4A6A776279571BBB05136B83",
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
									"6DC648264C120A6BB69E319F2FA02164.OutActors"
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
									"33326E29476FF122BF189790BC5A259C.self"
								]
							}
						]
					},
					{
						"guid": "28C4E9AB488F5A3A9159BDB8F6520B93",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 28,
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
									"05DECFB547C0171B24DD3FACBDA0CCA3.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CEAD3FC345459FBF818327BD1931E278.execute"
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
									"1236E74F492B0295D3F36BBD067C1652.Array"
								]
							}
						]
					},
					{
						"guid": "CEAD3FC345459FBF818327BD1931E278",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 29,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"28C4E9AB488F5A3A9159BDB8F6520B93.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7014B7054A25A8A04A62BC83794ED37E.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1236E74F492B0295D3F36BBD067C1652.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0AD77BCD4A2D7CAA0703B6883897CF4B.Object"
								]
							}
						]
					},
					{
						"guid": "7014B7054A25A8A04A62BC83794ED37E",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 30,
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
								"InString: GetDisplayName()",
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
									"CEAD3FC345459FBF818327BD1931E278.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E5027F004EC6C40B2F6DB6ACD8D09ED3.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"0AD77BCD4A2D7CAA0703B6883897CF4B.ReturnValue"
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
						"guid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CEAD3FC345459FBF818327BD1931E278.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7014B7054A25A8A04A62BC83794ED37E.InString"
								]
							}
						]
					},
					{
						"guid": "1236E74F492B0295D3F36BBD067C1652",
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
									"28C4E9AB488F5A3A9159BDB8F6520B93.OutActors"
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
									"CEAD3FC345459FBF818327BD1931E278.self"
								]
							}
						]
					},
					{
						"guid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 31,
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
									"7014B7054A25A8A04A62BC83794ED37E.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EE8CADF1419985097086CD96B36007BF.execute"
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
									"F1EFE5DD42D510B17C999F8ED155443D.Array"
								]
							}
						]
					},
					{
						"guid": "EE8CADF1419985097086CD96B36007BF",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 32,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"E5027F004EC6C40B2F6DB6ACD8D09ED3.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7A7824E24CF29BE77F569089C2210AAD.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F1EFE5DD42D510B17C999F8ED155443D.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"B82088134074237F517F20AB4141DBA8.Object"
								]
							}
						]
					},
					{
						"guid": "7A7824E24CF29BE77F569089C2210AAD",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 33,
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
								"InString: GetDisplayName()",
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
									"EE8CADF1419985097086CD96B36007BF.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1487DC97430FCC16733E21A2F14D8896.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"B82088134074237F517F20AB4141DBA8.ReturnValue"
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
						"guid": "B82088134074237F517F20AB4141DBA8",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EE8CADF1419985097086CD96B36007BF.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7A7824E24CF29BE77F569089C2210AAD.InString"
								]
							}
						]
					},
					{
						"guid": "F1EFE5DD42D510B17C999F8ED155443D",
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
									"E5027F004EC6C40B2F6DB6ACD8D09ED3.OutActors"
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
									"EE8CADF1419985097086CD96B36007BF.self"
								]
							}
						]
					},
					{
						"guid": "1487DC97430FCC16733E21A2F14D8896",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 34,
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
									"7A7824E24CF29BE77F569089C2210AAD.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F0ED80C44E55AB94C8F9B8A7EB6D0D20.execute"
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
									"D65492F149EA4B18C5EB3FB7E909B187.Array"
								]
							}
						]
					},
					{
						"guid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
						"type": "K2Node_Message",
						"title": "Get Blackboard Asset",
						"executionOrder": 35,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": true,
						"interfaceName": "BlackboardAssetProvider",
						"interfaceFunction": "GetBlackboardAsset",
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetBlackboardAsset",
							"literalValue": "self: GetBlackboardAsset()",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: GetBlackboardAsset()"
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
									"1487DC97430FCC16733E21A2F14D8896.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F2BE24424461D67FA065E7B838206D97.execute"
								]
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"D65492F149EA4B18C5EB3FB7E909B187.Output"
								]
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"485069254E1E548FB3315AB7B43D5AFC.Object"
								]
							}
						]
					},
					{
						"guid": "F2BE24424461D67FA065E7B838206D97",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 36,
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
								"InString: GetDisplayName()",
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
									"F0ED80C44E55AB94C8F9B8A7EB6D0D20.then"
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
									"485069254E1E548FB3315AB7B43D5AFC.ReturnValue"
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
						"guid": "485069254E1E548FB3315AB7B43D5AFC",
						"type": "K2Node_CallFunction",
						"title": "Get Display Name",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F0ED80C44E55AB94C8F9B8A7EB6D0D20.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F2BE24424461D67FA065E7B838206D97.InString"
								]
							}
						]
					},
					{
						"guid": "D65492F149EA4B18C5EB3FB7E909B187",
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
									"1487DC97430FCC16733E21A2F14D8896.OutActors"
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
									"F0ED80C44E55AB94C8F9B8A7EB6D0D20.self"
								]
							}
						]
					}
				],
				"entryNodes": [
					"EF0FBC0D4972E627071B618BE63DFA9E"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "EF0FBC0D4972E627071B618BE63DFA9E",
						"toNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
						"toNodeGuid": "53EA027843BC32525F608395409319E4",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "53EA027843BC32525F608395409319E4",
						"toNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
						"toNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
						"toNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
						"toNodeGuid": "4383C2664BC087311E3778AF47C17981",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "4383C2664BC087311E3778AF47C17981",
						"toNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
						"toNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
						"toNodeGuid": "4012848746DF5265996E328848F6B332",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "4012848746DF5265996E328848F6B332",
						"toNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
						"toNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
						"toNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
						"toNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
						"toNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
						"toNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
						"toNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
						"toNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
						"toNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
						"toNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
						"toNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
						"toNodeGuid": "E8145AF6419665FA3099219B886087B8",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "E8145AF6419665FA3099219B886087B8",
						"toNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
						"toNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
						"toNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
						"toNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
						"toNodeGuid": "33326E29476FF122BF189790BC5A259C",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "33326E29476FF122BF189790BC5A259C",
						"toNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
						"toNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
						"toNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
						"toNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
						"toNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
						"toNodeGuid": "EE8CADF1419985097086CD96B36007BF",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "EE8CADF1419985097086CD96B36007BF",
						"toNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
						"toNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
						"toNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
						"toNodeGuid": "F2BE24424461D67FA065E7B838206D97",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "FFE13BB940040A4A0486BB82BC5622C5",
						"toNodeGuid": "53EA027843BC32525F608395409319E4",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
						"toNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "53EA027843BC32525F608395409319E4",
						"toNodeGuid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
						"toNodeGuid": "FFE13BB940040A4A0486BB82BC5622C5",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "211A01304F5C822843C91B860C2785B1",
						"toNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
						"toNodeGuid": "4383C2664BC087311E3778AF47C17981",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
						"toNodeGuid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
						"toNodeGuid": "211A01304F5C822843C91B860C2785B1",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "D41A51F94B29AFB872ED88B85754497E",
						"toNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "BC9AE63C431622885387018417039C62",
						"toNodeGuid": "4012848746DF5265996E328848F6B332",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
						"toNodeGuid": "BC9AE63C431622885387018417039C62",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
						"toNodeGuid": "D41A51F94B29AFB872ED88B85754497E",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "4581E3A54FCAF4E838EA40AB1026E3E0",
						"toNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "87664F4647F996BAF93E33A6D992CB4B",
						"toNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
						"toNodeGuid": "87664F4647F996BAF93E33A6D992CB4B",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
						"toNodeGuid": "4581E3A54FCAF4E838EA40AB1026E3E0",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "0D65DEBC4F2DEDAD3B3B7BAF67E0290F",
						"toNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
						"toNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
						"toNodeGuid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
						"toNodeGuid": "0D65DEBC4F2DEDAD3B3B7BAF67E0290F",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "4BE64A9A4D66521752E135B0DB1C197A",
						"toNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "C9EC9201413B409B6900FCAF3E5AB0D1",
						"toNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
						"toNodeGuid": "C9EC9201413B409B6900FCAF3E5AB0D1",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
						"toNodeGuid": "4BE64A9A4D66521752E135B0DB1C197A",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "DB538A4C478CDDCF83DFC296DEDE3093",
						"toNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "4AE397CB4748BB27C638BB852FDC4A1B",
						"toNodeGuid": "E8145AF6419665FA3099219B886087B8",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
						"toNodeGuid": "4AE397CB4748BB27C638BB852FDC4A1B",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
						"toNodeGuid": "DB538A4C478CDDCF83DFC296DEDE3093",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "81829803492D78687E2CE3A922E6A7B7",
						"toNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "3683F8494A05EE8A069D6CB139AD061B",
						"toNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
						"toNodeGuid": "3683F8494A05EE8A069D6CB139AD061B",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
						"toNodeGuid": "81829803492D78687E2CE3A922E6A7B7",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "EF33558C4A6A776279571BBB05136B83",
						"toNodeGuid": "33326E29476FF122BF189790BC5A259C",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
						"toNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "33326E29476FF122BF189790BC5A259C",
						"toNodeGuid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
						"toNodeGuid": "EF33558C4A6A776279571BBB05136B83",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "1236E74F492B0295D3F36BBD067C1652",
						"toNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
						"toNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
						"toNodeGuid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
						"toNodeGuid": "1236E74F492B0295D3F36BBD067C1652",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "F1EFE5DD42D510B17C999F8ED155443D",
						"toNodeGuid": "EE8CADF1419985097086CD96B36007BF",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "B82088134074237F517F20AB4141DBA8",
						"toNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "EE8CADF1419985097086CD96B36007BF",
						"toNodeGuid": "B82088134074237F517F20AB4141DBA8",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
						"toNodeGuid": "F1EFE5DD42D510B17C999F8ED155443D",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "D65492F149EA4B18C5EB3FB7E909B187",
						"toNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "GetBlackboardAsset()"
					},
					{
						"fromNodeGuid": "485069254E1E548FB3315AB7B43D5AFC",
						"toNodeGuid": "F2BE24424461D67FA065E7B838206D97",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
						"toNodeGuid": "485069254E1E548FB3315AB7B43D5AFC",
						"fromPin": "ReturnValue",
						"toPin": "Object",
						"dataType": "object",
						"value": "GetDisplayName()"
					},
					{
						"fromNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
						"toNodeGuid": "D65492F149EA4B18C5EB3FB7E909B187",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					}
				],
				"deadCodeNodes": []
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "91AB4FE54EBA55B510C0209050F89A57",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 37,
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
					"91AB4FE54EBA55B510C0209050F89A57"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			}
		],
		"interfaces": [
			{
				"name": "BPI_TestInterface",
				"path": "/Game/BP/BPI_TestInterface.BPI_TestInterface_C",
				"fullyImplemented": true,
				"interfaceFunctions": [
					"isOk"
				],
				"implementedFunctions": [
					"isOk"
				],
				"missingFunctions": []
			}
		],
		"interfaceCalls": [
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "53EA027843BC32525F608395409319E4",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "33326E29476FF122BF189790BC5A259C",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "53EA027843BC32525F608395409319E4",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "33326E29476FF122BF189790BC5A259C",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			},
			{
				"interfaceName": "BlackboardAssetProvider",
				"functionName": "GetBlackboardAsset",
				"nodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"graphName": "EventGraph",
				"targetObject": "Get (a copy)"
			}
		],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "EF0FBC0D4972E627071B618BE63DFA9E",
				"toNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
				"toNodeGuid": "53EA027843BC32525F608395409319E4",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "53EA027843BC32525F608395409319E4",
				"toNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
				"toNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
				"toNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"toNodeGuid": "4383C2664BC087311E3778AF47C17981",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "4383C2664BC087311E3778AF47C17981",
				"toNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
				"toNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"toNodeGuid": "4012848746DF5265996E328848F6B332",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "4012848746DF5265996E328848F6B332",
				"toNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
				"toNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"toNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
				"toNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
				"toNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"toNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
				"toNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
				"toNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"toNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
				"toNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
				"toNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"toNodeGuid": "E8145AF6419665FA3099219B886087B8",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "E8145AF6419665FA3099219B886087B8",
				"toNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
				"toNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"toNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
				"toNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
				"toNodeGuid": "33326E29476FF122BF189790BC5A259C",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "33326E29476FF122BF189790BC5A259C",
				"toNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
				"toNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
				"toNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"toNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
				"toNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
				"toNodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"toNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
				"toNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
				"toNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"toNodeGuid": "F2BE24424461D67FA065E7B838206D97",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "FFE13BB940040A4A0486BB82BC5622C5",
				"toNodeGuid": "53EA027843BC32525F608395409319E4",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
				"toNodeGuid": "4A603EF64795180D8EA30A81003C6D79",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "53EA027843BC32525F608395409319E4",
				"toNodeGuid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
				"toNodeGuid": "FFE13BB940040A4A0486BB82BC5622C5",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "211A01304F5C822843C91B860C2785B1",
				"toNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
				"toNodeGuid": "4383C2664BC087311E3778AF47C17981",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"toNodeGuid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
				"toNodeGuid": "211A01304F5C822843C91B860C2785B1",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "D41A51F94B29AFB872ED88B85754497E",
				"toNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "BC9AE63C431622885387018417039C62",
				"toNodeGuid": "4012848746DF5265996E328848F6B332",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"toNodeGuid": "BC9AE63C431622885387018417039C62",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
				"toNodeGuid": "D41A51F94B29AFB872ED88B85754497E",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "4581E3A54FCAF4E838EA40AB1026E3E0",
				"toNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "87664F4647F996BAF93E33A6D992CB4B",
				"toNodeGuid": "45E834FB416B7E623EF3098C479C84BC",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"toNodeGuid": "87664F4647F996BAF93E33A6D992CB4B",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
				"toNodeGuid": "4581E3A54FCAF4E838EA40AB1026E3E0",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "0D65DEBC4F2DEDAD3B3B7BAF67E0290F",
				"toNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
				"toNodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"toNodeGuid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "C1382ECD48973E02A30C7F85274098C2",
				"toNodeGuid": "0D65DEBC4F2DEDAD3B3B7BAF67E0290F",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "4BE64A9A4D66521752E135B0DB1C197A",
				"toNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "C9EC9201413B409B6900FCAF3E5AB0D1",
				"toNodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"toNodeGuid": "C9EC9201413B409B6900FCAF3E5AB0D1",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
				"toNodeGuid": "4BE64A9A4D66521752E135B0DB1C197A",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "DB538A4C478CDDCF83DFC296DEDE3093",
				"toNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "4AE397CB4748BB27C638BB852FDC4A1B",
				"toNodeGuid": "E8145AF6419665FA3099219B886087B8",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"toNodeGuid": "4AE397CB4748BB27C638BB852FDC4A1B",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
				"toNodeGuid": "DB538A4C478CDDCF83DFC296DEDE3093",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "81829803492D78687E2CE3A922E6A7B7",
				"toNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "3683F8494A05EE8A069D6CB139AD061B",
				"toNodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"toNodeGuid": "3683F8494A05EE8A069D6CB139AD061B",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
				"toNodeGuid": "81829803492D78687E2CE3A922E6A7B7",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "EF33558C4A6A776279571BBB05136B83",
				"toNodeGuid": "33326E29476FF122BF189790BC5A259C",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
				"toNodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "33326E29476FF122BF189790BC5A259C",
				"toNodeGuid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "6DC648264C120A6BB69E319F2FA02164",
				"toNodeGuid": "EF33558C4A6A776279571BBB05136B83",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "1236E74F492B0295D3F36BBD067C1652",
				"toNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
				"toNodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"toNodeGuid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
				"toNodeGuid": "1236E74F492B0295D3F36BBD067C1652",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "F1EFE5DD42D510B17C999F8ED155443D",
				"toNodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "B82088134074237F517F20AB4141DBA8",
				"toNodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"toNodeGuid": "B82088134074237F517F20AB4141DBA8",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
				"toNodeGuid": "F1EFE5DD42D510B17C999F8ED155443D",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "D65492F149EA4B18C5EB3FB7E909B187",
				"toNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "GetBlackboardAsset()"
			},
			{
				"fromNodeGuid": "485069254E1E548FB3315AB7B43D5AFC",
				"toNodeGuid": "F2BE24424461D67FA065E7B838206D97",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"toNodeGuid": "485069254E1E548FB3315AB7B43D5AFC",
				"fromPin": "ReturnValue",
				"toPin": "Object",
				"dataType": "object",
				"value": "GetDisplayName()"
			},
			{
				"fromNodeGuid": "1487DC97430FCC16733E21A2F14D8896",
				"toNodeGuid": "D65492F149EA4B18C5EB3FB7E909B187",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			}
		],
		"variableUsages": [],
		"functionCalls": [
			{
				"nodeGuid": "7F6A5984459C0452E61AFCB841851DAE",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 1,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "53EA027843BC32525F608395409319E4",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 2,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "4A603EF64795180D8EA30A81003C6D79",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 3,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "F3D897A54A3C0BD7E12ED29A0A9F9CA7",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "8862CD0E423032DAACB9AFAEC53AE2A8",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 4,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "86A9C1CE4D41F915BCE2479BD2528F85",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 5,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "4383C2664BC087311E3778AF47C17981",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 6,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "6DDE14EB4BB8416B5ACABFBCAC421EFB",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "3E72C6DB494C32E10CD9F1B63A387BD5",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 7,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "7C06C87B4EFBA099B8D5138572C200BA",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 8,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "4012848746DF5265996E328848F6B332",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 9,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "BC9AE63C431622885387018417039C62",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "B68AC7FC4F69DAE02B8D4589CD52828C",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 10,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "CCD0F62F48B086EBA037E2BBB5C40D7D",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 11,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "45E834FB416B7E623EF3098C479C84BC",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 12,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "87664F4647F996BAF93E33A6D992CB4B",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "C1382ECD48973E02A30C7F85274098C2",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 13,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "A6E23EDA415EA0FCF0D31293B1DE8D4B",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 14,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "37C3E8E34AEB8B623EBAEFA999B28DBA",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 15,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "F0E7D0204D3ED9AF0D7D5CA4411C2602",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "906066D94EE75F48EFAF48BC3C7AD30B",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 16,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "DA94B92E4D6A2FF787B38DBA249D45F2",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 17,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "88DFDDC54C960E16B20212AAC5AD3AB4",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 18,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "C9EC9201413B409B6900FCAF3E5AB0D1",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "2064D8844DADF6A1FE8DB4A5701D745B",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 19,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "4F3635CB46F5A53A4E807C9CCCC22AF8",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 20,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "E8145AF6419665FA3099219B886087B8",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 21,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "4AE397CB4748BB27C638BB852FDC4A1B",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "E14F858E43CFFF048F34D4806276CCA9",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 22,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "FFD77E7244A0F38FC58CA8B834B1B59A",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 23,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "3980CFE84B0F723FEAD526BF6477D862",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 24,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "3683F8494A05EE8A069D6CB139AD061B",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "6DC648264C120A6BB69E319F2FA02164",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 25,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "33326E29476FF122BF189790BC5A259C",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 26,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "05DECFB547C0171B24DD3FACBDA0CCA3",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 27,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "7325D4354980DD6A4E5DEEA4B8CA65ED",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "28C4E9AB488F5A3A9159BDB8F6520B93",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 28,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "CEAD3FC345459FBF818327BD1931E278",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 29,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "7014B7054A25A8A04A62BC83794ED37E",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 30,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "0AD77BCD4A2D7CAA0703B6883897CF4B",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "E5027F004EC6C40B2F6DB6ACD8D09ED3",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 31,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "EE8CADF1419985097086CD96B36007BF",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 32,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "7A7824E24CF29BE77F569089C2210AAD",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 33,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "B82088134074237F517F20AB4141DBA8",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "1487DC97430FCC16733E21A2F14D8896",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 34,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "F0ED80C44E55AB94C8F9B8A7EB6D0D20",
				"graphName": "EventGraph",
				"functionName": "GetBlackboardAsset",
				"returnValue": "used",
				"executionOrder": 35,
				"arguments": [
					"self: GetBlackboardAsset()"
				]
			},
			{
				"nodeGuid": "F2BE24424461D67FA065E7B838206D97",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 36,
				"arguments": [
					"InString: GetDisplayName()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "485069254E1E548FB3315AB7B43D5AFC",
				"graphName": "EventGraph",
				"functionName": "GetDisplayName",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Object: GetBlackboardAsset()"
				]
			}
		],
		"referencedBlueprints": [],
		"diagnostics": [],
		"deadCodeNodes": [],
		"totalExecutionPaths": 36,
		"maxExecutionDepth": 36
	},
	"issues": [
		{
			"level": "warning",
			"type": "Large Graph",
			"desc": "Graph 'EventGraph' has 61 nodes. Consider refactoring into functions.",
			"rule_id": "BP-SIZE-001"
		}
	]
};})();