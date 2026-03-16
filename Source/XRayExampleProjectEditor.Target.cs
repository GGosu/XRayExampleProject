// Fill out your copyright notice in the Description page of Project Settings.

using UnrealBuildTool;
using System.Collections.Generic;

public class XRayExampleProjectEditorTarget : TargetRules
{
	public XRayExampleProjectEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		bOverrideBuildEnvironment = true;
		CppStandard = CppStandardVersion.Cpp20;

		ExtraModuleNames.AddRange( new string[] { "XRayExampleProject" } );
	}
}
